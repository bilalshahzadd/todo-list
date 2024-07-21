import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupData: any = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: ''
  }
  res: any;

  constructor(private http: HttpClient, private router: Router) { }

  Signup() {
    this.http.post('http://localhost/todo-list/backend/auth/signup.php', this.signupData).subscribe((response: any) => {
      if (response.status === 'success') {
        this.res = response;
        alert('User registered successfully');
        this.router.navigate(['/login']);
      } else {
        this.res = response;
      }
    });
  }

}