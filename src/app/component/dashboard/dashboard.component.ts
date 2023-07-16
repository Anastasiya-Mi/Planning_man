// import { Component } from '@angular/core';
// import { Task } from '../task/task';
// import { MatDialog } from '@angular/material/dialog';
// import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
// import { TaskDialogResult } from '../task-dialog/task-dialog.component';

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
// })
// export class DashboardComponent {
//   todo: Task[] = [
//     {
//       title: 'Buy milk',
//       description: 'Go to the store and buy milk'
//     },
//     {
//       title: 'Create a Kanban app',
//       description: 'Using Firebase and Angular create a Kanban app!'
//     }
//   ];
//   constructor(private dialog: MatDialog) {}

//   newTask(): void {
//     const dialogRef = this.dialog.open(TaskDialogComponent, {
//       width: '270px',
//       data: {
//         task: {},
//       },
//     });
//     dialogRef
//       .afterClosed()
//       .subscribe((result: TaskDialogResult|undefined) => {
//         if (!result) {
//           return;
//         }
//         this.todo.push(result.task);
//       });
//   }
  // editTask(list:'todo',task: Task): void {
  //   const dialogRef = this.dialog.open(TaskDialogComponent, {
  //     width: '270px',
  //     data: {
  //       task,
  //       enableDelete: true,
  //     },
  //   });
  //   dialogRef.afterClosed().subscribe((result: TaskDialogResult|undefined) => {
  //     if (!result) {
  //       return;
  //     }
  //     const dataList = this[list];
  //     const taskIndex = dataList.indexOf(task);
  //     if (result.delete) {
  //       dataList.splice(taskIndex, 1);
  //     } else {
  //       dataList[taskIndex] = task;
  //     }
    // });
// }
// }
