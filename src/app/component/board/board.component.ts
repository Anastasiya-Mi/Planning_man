import { Component } from '@angular/core';
import { Task } from '../task/task';
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { TaskDialogResult } from '../task-dialog/task-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-boards',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardsComponent {

  list = this.store.collection('list').valueChanges({idField: 'id'}) as Observable<Task[]>;
  constructor(private dialog: MatDialog, private store: AngularFirestore) {}

  newTask(): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      height: '400px',
      width: '600px',
      data: {
        task: {
          condition: true,
        },
      },
    });
    dialogRef
      .afterClosed()
      .subscribe((result: TaskDialogResult | undefined) => {
        let value = result?.task.condition;
        const checkTitle = result?.task.title;
        const checkDescription = result?.task.description;
        if (!checkTitle && !checkDescription) {
          value = false;
        }
        if (!result || !value) {
          return;
        }
        this.store.collection('list').add(result.task)
      });
  }
}
