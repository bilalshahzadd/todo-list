import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TodosComponent } from './pages/todos/todos.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "task-list", component: TodosComponent},
    {path: "sign-up", component: SignupComponent},
    {path: "login", component: LoginComponent}
];