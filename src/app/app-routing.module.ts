import { TasksDetailComponent } from './tasks-detail/tasks-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksListComponent } from './tasks-list/tasks-list.component';

const routes: Routes = [
  { path: 'lista', component: TasksListComponent },
  { path: 'detalhe/:id', component: TasksDetailComponent },
  { path: '**', redirectTo: 'lista' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
