import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { TodoList } from './../../../model/todo-list.model';
import { TodoListService } from './../../../services/todo-list.service';
import { TodoDetailsComponent } from '../todo-details/todo-details.component';

import { MatDialog } from '@angular/material/dialog';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-read',
  templateUrl: './todo-read.component.html',
  styleUrls: ['./todo-read.component.css']
})
export class TodoReadComponent implements OnInit {

  todoList$?: Observable<TodoList[]>;

  constructor(private todoListService: TodoListService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.todoList$ = this.todoListService.read();
    this.todoList$.subscribe();
  }

  showTaskDetails(task: TodoList): void {
    const dialogRef = this.dialog.open(TodoDetailsComponent, {
      width: '600px',
      data: task
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  checkTask(event: MatCheckboxChange, task: TodoList) {
    task.done = event.checked;
    this.todoListService.check(task).subscribe();
  }

  priorityColor(task: TodoList): string {
    switch(task.priority) {
      case "low":
        return "priority-low";
      case "medium":
        return "priority-medium";
      case "high":
        return "priority-high";
      default:
        return "priority-none";
    }
  }

}
