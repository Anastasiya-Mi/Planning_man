import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { BoardsComponent } from './component/board/board.component';
import { BoardListComponent } from './component/board-list/board-list.component';
import { RegisterComponent } from './component/register/register.component';
import { MainComponent } from './component/main/main.component';
import { TaskComponent } from './component/task/task.component';


// const taskRoutes: Routes = [
//   { path: 'list/:id', component: BoardListComponent },
// ];

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'dashboard', component: BoardsComponent, children:taskRoutes},
  { path: 'dashboard', component: BoardsComponent},
  { path: 'list/:id',component: BoardListComponent},
  { path: 'register', component: RegisterComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
