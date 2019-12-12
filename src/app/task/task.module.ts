import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskCreateComponent } from './components/task-create/task-create.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonService } from './services/common.service';
import { TaskList2Component } from './components/task-list2/task-list2.component';



@NgModule({
  declarations: [TaskListComponent, TaskCreateComponent, TaskList2Component],
  imports: [
    CommonModule,
    NgxDatatableModule,
    HttpModule,
    FormsModule
  ],
  providers: [CommonService],
  exports:[
    TaskListComponent,
    TaskCreateComponent,
    TaskList2Component
  ]
})


export class TaskModule { }
