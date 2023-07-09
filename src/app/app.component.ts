import { Component } from '@angular/core';
import { Task } from './component/task/task';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firebase-angular';
  
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
//   inProgress: Task[] = [];
//   done: Task[] = [];
}

