import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TodoList } from './../../../model/todo-list.model';
import { TodoListService } from './../../../services/todo-list.service';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {

  task: TodoList = {
    title: "",
    description: "",
    priority: "",
    done: false,
  };

  constructor(private router: Router, private todoListService: TodoListService) { }

  ngOnInit(): void {
  }

  createTodo(): void {
    this.todoListService.create(this.task).subscribe(() => {
      this.todoListService.showMessage('Tarefa criada com sucesso!');
      this.router.navigate(['/']);
    });
  }

}
