import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

//goala:any = ['The initial goal', 'Another silly life goal']

  private goals = new BehaviorSubject<any>(
    [
      'The initial goal', 
    'Another silly life goal',
    'The initial goal -100', 
    'The initial goal-200', 
    'The initial goal-300', 

  ]
  );
  goal = this.goals.asObservable()

  
  constructor() { }

  changeGoal(goal) {
    this.goals.next(goal)
  }

}
