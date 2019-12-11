import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/task/services/data.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  message: Object;
  mainObject ={
      taskCount : 4,
      loadStatus : 0,
      tasks : [
          { description: "Eat Some Kacchi",
            status: true},
          { description: "Work Hard",
            status: true},
          { description: "Sleep Well",
            status: true},
          { description: "Get things done",
            status: true}
      ]
  };
  
  columns = [
    {prop:'description'},
    {name:'Status'}
  ];
  

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message =>{
      this.message = message;
      this.createNewTask(message);
    })
  }
  

  createNewTask(message: string){
    if(message != ''){
      var tempTask = {
        description: message,
        status: false
      };
      this.mainObject.tasks.push(tempTask);
      this.mainObject.tasks = [...this.mainObject.tasks];
      this.setDataToLocalStorage();
      console.log(this.mainObject.tasks);
    }
  }

  setDataToLocalStorage(){
    localStorage.setItem('mainObject',JSON.stringify(this.mainObject));
  }

  getDataFromLocalStorage(){
    if(localStorage.getItem("mainObject")==null){
        localStorage.setItem('mainObject',JSON.stringify(this.mainObject));
    }
    this.mainObject=JSON.parse(localStorage.getItem("mainObject"));
  }

}
