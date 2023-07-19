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
// import { MatIconModule } from '@angular/material/icon';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { TaskDialogResult } from '../task-dialog/task-dialog.component';
import { ConfirmWindowComponent } from '../confirm-window/confirm-window.component';
// import { BoardsComponent } from '../board/board.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { TaskListService } from '../../shared/task-list.service';
import {Subscription} from 'rxjs';
// import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],

})
export class TaskComponent {
  @Input() task: Task | null = null;
  @Output() buttonClick  = new EventEmitter<Task>();
  // private subs: Subscription;
  // id: any;
  // private routeSubscription: Subscription;
  constructor(
    private dialog: MatDialog,
    private store: AngularFirestore,
    // private activateRoute: ActivatedRoute,
    private router: Router,
    // private readonly taskListService: TaskListService,
  ) {
    // this.routeSubscription = route.params.subscribe(params=>this.id=params['id']);
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

  redirectTo(task: Task): void {
    const id =this.task?.id;
    this.router.navigate(['list',id ],
  {
    queryParams:{
        'title': task.title,
        'description': task.description
    }
});
  //   // console.log(typeof this.task)
  //   this.taskListService.setCurrentValue(this.task);
  }
  // sendData(data:string): void{
  //   this.taskListService.setCurrentValue(data);

  // }
}
