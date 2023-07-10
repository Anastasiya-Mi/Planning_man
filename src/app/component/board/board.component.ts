// import { Component } from '@angular/core';
// import { Task } from '../task/task';
// import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
// import { MatDialog } from '@angular/material/dialog';
// import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
// import { TaskDialogResult  } from '../task-dialog/task-dialog.component';
// import { AngularFirestoreModule  } from '@angular/fire/compat/firestore';
// // import { inject } from '@angular/core';
// // import { Firestore, collectionData, collection } from '@angular/fire/firestore';
// import { Observable } from 'rxjs',
// // import { DragDropModule } from '@angular/cdk/drag-drop';

// @Component({
//   selector: 'app-board',
//   templateUrl: './board.component.html',
//   styleUrls: ['./board.component.css']
// })

// export class BoardComponent {
//   todo = this.store.collection('todo').valueChanges({ idField: 'id' }) as Observable<Task[]>;
//   inProgress = this.store.collection('inProgress').valueChanges({ idField: 'id' }) as Observable<Task[]>;
//   done = this.store.collection('done').valueChanges({ idField: 'id' }) as Observable<Task[]>;
//   // todo: Task[] = [
//   //   {
//   //     title: 'Buy milk',
//   //     description: 'Go to the store and buy milk'
//   //   },
//   //   {
//   //     title: 'Create a Kanban app',
//   //     description: 'Using Firebase and Angular create a Kanban app!'
//   //   }
//   // ];
//   // inProgress: Task[] = [];
//   // done: Task[] = [];

//   editTask(list: 'done' | 'todo' | 'inProgress', task: Task): void {
//     const dialogRef = this.dialog.open(TaskDialogComponent, {
//       width: '270px',
//       data: {
//         task,
//         enableDelete: true,
//       },
//     });

// dialogRef.afterClosed().subscribe((result: TaskDialogResult|undefined) => {
//   if (!result) {
//     return;
//   }
//   if (result.delete) {
//     this.store.collection(list).doc(task.id).delete();
//   } else {
//     this.store.collection(list).doc(task.id).update(task);
//   }
// });

//   }

//   drop(event: CdkDragDrop<Task[]>): void {
//     if (event.previousContainer === event.container) {
//       return;
//     }
//     const item = event.previousContainer.data[event.previousIndex];
//     this.store.firestore.runTransaction(() => {
//       const promise = Promise.all([
//         this.store.collection(event.previousContainer.id).doc(item.id).delete(),
//         this.store.collection(event.container.id).add(item),
//       ]);
//       return promise;
//     });
//     transferArrayItem(
//       event.previousContainer.data,
//       event.container.data,
//       event.previousIndex,
//       event.currentIndex
//     );
//   }
//   constructor(private dialog: MatDialog, private store: AngularFirestoreModule) {}


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
//         this.store.collection('todo').add(result.task)
//       });
//   }
// }
