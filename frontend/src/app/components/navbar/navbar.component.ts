import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
})

export class NavbarComponent {

  constructor(private http: HttpClient, private router: Router) { }

  open_page = (page: string) => {
    this.router.navigate([page]);
  }
}