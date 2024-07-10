import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ModalComponent } from '../../components/modal/modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, NavbarComponent, ModalComponent],
  templateUrl: './todos.component.html',
})

export class TodosComponent {

  todos: any[] = [];

  constructor(private http: HttpClient, private router: Router) {
    this.getAllTodos();
  }

  getAllTodos() {
    this.http.get("http://localhost/todo-list/backend/send-data.php").subscribe((res: any) => {
      this.todos = res;
    })
  }

  getData(event: any) {
    let id = event.target.id
    let parent = event.target.parentNode.parentNode;
    let title = parent.childNodes[1].innerText;
    let description = parent.childNodes[2].innerText;
    this.router.navigate([], {
      queryParams: { title: title, description: description, id: id }
    });
  }

  deleteTodo(event: any) {
    if (confirm("Are you sure you want to delete this todo?")) {
      let id = event.target.id;
      this.http.post(`http://localhost/todo-list/backend/delete-todo.php?id=${id}`, { id: id }).subscribe((res: any) => {
        alert(res.message);
        this.getAllTodos();
      });
    } else {
      alert("Todo not deleted");
    }
  }
}