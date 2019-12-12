import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class CommonService {

  constructor(private http: Http) { }

  SaveUser(user){
    return this.http.post('http://localhost:8080/api/SaveUser/',user).map((response: Response) => response.json())
  }
  GetUser(){
    return this.http.get('http://localhost:8080/api/GetUser/').map((response: Response) => response.json())
  }
  DeleteUser(id){
    return this.http.post('http://localhost:8080/api/DeleteUser/',{'id':id}).map((response: Response) => response.json())
  }
}
