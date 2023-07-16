
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../task/task';

import { BoardsComponent } from '../board/board.component';


@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardListComponent {
  constructor() {
    // someApi.getList().subscribe(res => {
    //   const count = res.size;
    //   if (count === 0) {
    //     router.navigate(['/dashboard']);
    //   }
    //   if (count === 1) {
    //     const id = res.list[0].id;
    //     router.navigate([`/thing/${id}/overview`]);
    //   }
    //   if (count > 1) {
    //     router.navigate(['/thing/list']);
    //   }
    // });
  }
}
