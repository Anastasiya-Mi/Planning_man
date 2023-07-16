import { Component,ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task';
import { ActivatedRoute} from '@angular/router';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { TaskDialogResult } from '../task-dialog/task-dialog.component';
import { ConfirmWindowComponent } from '../confirm-window/confirm-window.component';
import { BoardsComponent } from '../board/board.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent {
  @Input() task: Task | null = null;
  @Output() edit = new EventEmitter<Task>();

  constructor(
    private dialog: MatDialog,
    private store: AngularFirestore,
    private activateRoute: ActivatedRoute,
    private router: Router,
  ) {
    // console.log(this.activateRoute);
  }
  editTask(task: Task): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      height: '400px',
      width: '600px',
      data: {
        task,
      },
    });
    console.log(this.task);
    dialogRef
      .afterClosed()
      .subscribe((result: TaskDialogResult | undefined) => {
        const resultId = result?.task?.id;
        let value = result?.task.condition;
        const checkTitle = result?.task.title;
        const checkDescription = result?.task.description;
        if (!checkTitle && !checkDescription) {
          value = false;
          this.store.collection('list').doc(resultId).delete();
        }
        if (!result) {
          return;
        }
        value = true;
      });
  }

  deleteTask(task: Task): void {
    const dialogRef = this.dialog.open(ConfirmWindowComponent, {
      height: '100px',
      width: '200px',
      data: {
        task,
      },
    });

    dialogRef
      .afterClosed()
      .subscribe((result: ConfirmWindowComponent | undefined) => {
        const valueCondition = result?.task?.condition;
        const resultId = result?.task?.id;
        console.log(result?.task?.id, 'task');
        if (valueCondition) {
          return;
        }

        this.store.collection('list').doc(resultId).delete();
      });
  }
  redirectTo() {
    this.router.navigate(['list']);
  }
}
