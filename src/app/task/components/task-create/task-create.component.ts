import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/task/services/data.service';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})

export class TaskCreateComponent implements OnInit {

  message: string;
  taskText: string;
  tasks = [];
  testData: string;

  constructor(private data: DataService) { 
  }

  ngOnInit() {
    let newTaskData = '';
    this.sendDataToList(newTaskData);
  }

  sendDataToList(newTaskData){
    this.data.changeMessage(newTaskData);
  }

  addTask(newTask: string){
    if (newTask) {
      this.tasks.push(newTask);
      console.log(this.tasks);
      this.sendDataToList(newTask);
    }

  }


}
