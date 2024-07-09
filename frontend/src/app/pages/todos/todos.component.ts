import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './todos.component.html',
})

export class TodosComponent {

  todos: any[] = [];

  constructor(private http: HttpClient) {
    this.getAllTodos();
  }

  getAllTodos() {
    this.http.get("http://localhost/todo-list/backend/send-data.php").subscribe((res: any) => {
      this.todos = res;
    })
  }
}