import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { TodoListComponent } from './views/todo-list/todo-list.component';
import { TodoCreateComponent } from './components/todo-list/todo-create/todo-create.component';
import { TodoUpdateComponent } from './components/todo-list/todo-update/todo-update.component';
import { TodoDeleteComponent } from './components/todo-list/todo-delete/todo-delete.component';
import { LoginComponent } from './components/login/login/login.component';

const routes: Routes = [
  {
    path: "",
    component: TodoListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "tarefa/criar",
    component: TodoCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "tarefa/atualizar/:id",
    component: TodoUpdateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "tarefa/excluir/:id",
    component: TodoDeleteComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: '**', 
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
