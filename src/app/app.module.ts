import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskModule } from './task/task.module';
import { TaskListComponent } from './task/components/task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

@Injectable({
  providedIn: 'root'
})

export class AppModule { }
