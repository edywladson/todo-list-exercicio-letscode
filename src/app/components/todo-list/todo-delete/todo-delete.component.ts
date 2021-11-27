import { TodoListService } from './../../../services/todo-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { TodoList } from './../../../model/todo-list.model';

@Component({
  selector: 'app-todo-delete',
  templateUrl: './todo-delete.component.html',
  styleUrls: ['./todo-delete.component.css']
})
export class TodoDeleteComponent implements OnInit {

  task!: TodoList;

  constructor(private router: Router ,private route: ActivatedRoute, private todoListService: TodoListService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.todoListService.readById(id).subscribe(task => {
      this.task = task;
    });
  }

  deleteTask(): void {
    this.todoListService.delete(this.task.id!).subscribe(() => {
      this.todoListService.showMessage('Tarefa excluída com sucesso!');
      this.router.navigate(['/']);
    })
  }

}
