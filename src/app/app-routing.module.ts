import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TasksEditComponent } from './tasks-edit/tasks-edit.component';

const routes: Routes = [
  { path: 'lista', component: TasksListComponent },
  { path: 'editar/:id', component: TasksEditComponent },
  { path: '**', redirectTo: 'lista' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
