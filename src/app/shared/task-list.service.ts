import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs';
import { Task } from '../component/task/task';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {
private data: any
  constructor() { }

setCurrentValue(data:any) :void{
  this.data =data;

}

get CurrentValue():any{
return this.data;
}
}
