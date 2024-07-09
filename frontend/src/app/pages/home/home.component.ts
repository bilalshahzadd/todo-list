import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FormsModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {

  todoObj: any = {
    title: "",
    description: "",
  }

  constructor(private http: HttpClient, private router: Router) { }

  addTodo() {
    this.http.post("http://localhost/todo-list/backend/save-todo.php", this.todoObj).subscribe((res: any) => {
      if (res.success) {
        alert(res.message);
        this.router.navigate(['/task-list']);
      } else {
        alert(res.message);
      }
    })
  }
}