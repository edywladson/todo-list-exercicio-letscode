import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TodoList } from '../model/todo-list.model';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  baseUrl = 'http://localhost:3001/todos';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  create(task: TodoList): Observable<TodoList> {
    return this.http.post<TodoList>(this.baseUrl, task);
  }

  read(): Observable<TodoList[]> {
    return this.http.get<TodoList[]>(this.baseUrl);
  }

  readById(id: number): Observable<TodoList> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<TodoList>(url);
  }

  update(task: TodoList): Observable<TodoList> {
    const url = `${this.baseUrl}/${task.id}`;
    return this.http.put<TodoList>(url, task);
  }

  delete(id: number): Observable<TodoList> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<TodoList>(url);
  }

  check(task: TodoList): Observable<TodoList[]> {
    const url = `${this.baseUrl}/${task.id}`;
    return this.http.put<TodoList[]>(url, task);
  }
}
