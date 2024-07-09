import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TodosComponent } from './pages/todos/todos.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "task-list", component: TodosComponent}
];