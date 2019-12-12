import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { v4 as uuid } from 'uuid';

import { CommonService } from 'app/task/services/common.service';
import { DataService } from 'app/task/services/data.service';

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
  
  constructor(private commonService: CommonService, private data: DataService) { }
  RepoData;
  valbutton = "Save";
  ngOnInit() {
    this.commonService.GetUser().subscribe(data => this.RepoData = data)
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

  onSave = function(user, isValid: boolean){
    user.mode = this.valbutton;
    this.commonService.SaveUser(user).subscribe(data=> {
      alert(data.data);
      this.ngOnInit;
    }, error => this.errorMessage = error);
  }
  edit = function(kk){
    this.id = kk._id;
    this.name = kk.name;
    this.address = kk.address;
    this.valbutton = 'Update';
  }
  delete = function(id){
    this.commonService.DeleteUser(id).subscribe(data=> {
      alert(data.data);
      this.ngOnInit();
    }, error => this.errorMessage = error);
  }

}
