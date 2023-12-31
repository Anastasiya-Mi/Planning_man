
import { Component,Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../task/task';
import { ActivatedRoute} from '@angular/router';
import { TaskListService } from '../../shared/task-list.service';
import {Subscription} from 'rxjs';




@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css'],

})
export class BoardListComponent {
  // @Input() task: Task | null = null;
  //  taskList:any;
  // constructor(

  //   private activateRoute: ActivatedRoute,
  //   private router: Router
  //   private readonly taskListService: TaskListService,

  // ) {

  // }
  // getData() :any{
  //   this.taskList =this.taskListService.CurrentValue;
  //   // console.log(this.taskList)
  //   // return this.taskList;
  // }

  redirectTo() {
    this.router.navigate(['dashboard']);
  }
  id: any;
  title: any;
  description: any;

  private routeSubscription: Subscription;
  private querySubscription: Subscription;
  constructor(private route: ActivatedRoute,private router: Router){

      this.routeSubscription = route.params.subscribe(params=>this.id=params['id']);
      this.querySubscription = route.queryParams.subscribe(
          (queryParam: any) => {
              this.title = queryParam['title'];
              this.description = queryParam['description'];
          }
      );
  }

}
