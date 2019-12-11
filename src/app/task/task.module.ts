import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskCreateComponent } from './components/task-create/task-create.component';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [TaskListComponent, TaskCreateComponent],
  imports: [
    CommonModule,
    NgxDatatableModule,
    HttpModule
  ],
  exports:[
    TaskListComponent,
    TaskCreateComponent
  ]
})


export class TaskModule { }
