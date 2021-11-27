import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { TodoList } from './../../../model/todo-list.model';
import { TodoListService } from './../../../services/todo-list.service';

@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls: ['./todo-update.component.css']
})
export class TodoUpdateComponent implements OnInit {

  task!: TodoList;

  constructor(private router: Router, private route: ActivatedRoute,  private todoListService: TodoListService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.todoListService.readById(id).subscribe(task => {
      this.task = task;
    });
  }

  updateTask(): void {
    this.todoListService.update(this.task).subscribe(() => {
      this.todoListService.showMessage('Tarefa atualizada com sucesso!');
      this.router.navigate(['/']);
    })
  }

}
