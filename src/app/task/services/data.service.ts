import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from 'app/task/entities/task';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  public messageSource = new BehaviorSubject('No data is given');
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: string){
    this.messageSource.next(message);
  }
}
