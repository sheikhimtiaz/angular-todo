import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { v4 as uuid } from 'uuid';

import { CommonService } from 'app/task/services/common.service';
import { DataService } from 'app/task/services/data.service';

@Component({
  selector: 'app-task-list2',
  templateUrl: './task-list2.component.html',
  styleUrls: ['./task-list2.component.css']
})

export class TaskList2Component implements OnInit {


  
  constructor(private commonService: CommonService) { }
  RepoData;
  valbutton = "Save";

  ngOnInit() {
    this.commonService.GetUser().subscribe(data => this.RepoData = data);
  }
  

  onSave = function(user, isValid: boolean){
    user.mode = this.valbutton;
    this.commonService.SaveUser(user).subscribe(data=> {
      alert(data.data);
      this.ngOnInit();
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
