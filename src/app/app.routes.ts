import { Routes } from '@angular/router';
import { TodosComponent } from './Mycomponent/todos/todos.component';
import { AboutComponent } from './Mycomponent/about/about.component';

export const routes: Routes = [
    {path: '', component: TodosComponent},
    {path: 'about', component: AboutComponent}

];
