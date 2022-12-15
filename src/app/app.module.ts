import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TasksDetailComponent } from './tasks-detail/tasks-detail.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TasksEditComponent } from './tasks-edit/tasks-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    // AppRoutingModule,
    TasksDetailComponent,
    TasksListComponent,
    TasksEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
