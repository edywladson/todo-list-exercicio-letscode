import { Component, Inject, OnInit } from '@angular/core';

import { TodoList } from './../../../model/todo-list.model';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TodoDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public task: TodoList,
  ) { }

  ngOnInit(): void {
  }

  priority(task: TodoList): string {
    switch(task.priority) {
      case "low":
        return "Baixa";
      case "medium":
        return "Mádia";
      case "high":
        return "Alta";
      default:
        return "Nenhuma";
    }
  }

  close(): void {
    this.dialogRef.close();
  }

}
