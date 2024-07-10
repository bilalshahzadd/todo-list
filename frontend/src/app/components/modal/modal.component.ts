import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal.component.html',
})

export class ModalComponent {

  todoObj: { title: string, description: string, id: number } = {
    title: '',
    description: '',
    id: -1
  }

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {
    this.getQueryParams();
  }

  updateTodo() {
    this.http.post("http://localhost/todo-list/backend/edit-todo.php", this.todoObj).subscribe((res: any) => {
      if (res.success) {
        alert(res.message);
        window.location.reload();
      } else {
        alert(res.message);
      }
    })
  }

  getQueryParams() {
    this.route.queryParams.subscribe((params: Params) => {
      this.todoObj.title = params['title'];
      this.todoObj.description = params['description'];
      this.todoObj.id = params['id'];
    });
  }
}