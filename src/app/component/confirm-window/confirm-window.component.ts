import { Component,Inject, Input, OnInit } from '@angular/core';
import { Confirm } from './confirm';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
// import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { TaskDialogResult } from '../task-dialog/task-dialog.component';
// import { TaskDialogData } from '../task-dialog/task-dialog.component';
import { Task } from '../task/task';
// import { Target } from '@angular/compiler';


@Component({
  selector: 'app-confirm-window',
  templateUrl: './confirm-window.component.html',
  styleUrls: ['./confirm-window.component.css']
})
export class ConfirmWindowComponent {
  @Input() task: Task | null = null;
  constructor(
    public dialogRef: MatDialogRef<ConfirmWindowComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TaskDialogResult
  ) {}
resultOfChoice(event:any){
  let target = event.target.value;
  if(target === 'true'){
    this.data.task.condition = false;
  }
  else{
    this.data.task.condition = true;
  }
  this.dialogRef.close(this.data)
}

}
