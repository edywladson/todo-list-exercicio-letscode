import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material/material.module';
import { ContainerComponent } from './components/template/container/container.component';
import { TodoListComponent } from './views/todo-list/todo-list.component';
import { TodoReadComponent } from './components/todo-list/todo-read/todo-read.component';
import { TodoCreateComponent } from './components/todo-list/todo-create/todo-create.component';
import { TodoUpdateComponent } from './components/todo-list/todo-update/todo-update.component';
import { TodoDeleteComponent } from './components/todo-list/todo-delete/todo-delete.component';
import { CompletedTasksDirective } from './directives/completed-tasks.directive';
import { LoginComponent } from './components/login/login/login.component';
import { LoginService } from './services/login.service';
import { AuthGuard } from './guards/auth.guard';
import { TodoDetailsComponent } from './components/todo-list/todo-details/todo-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    TodoListComponent,
    TodoReadComponent,
    TodoCreateComponent,
    TodoUpdateComponent,
    TodoDeleteComponent,
    CompletedTasksDirective,
    LoginComponent,
    TodoDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    SharedModule,
  ],
  providers: [
    LoginService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
