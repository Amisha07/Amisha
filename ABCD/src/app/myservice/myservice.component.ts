import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { RouterModule, Routes, Router } from '@angular/router';


@Component({
  selector: 'app-myservice',
  templateUrl: './myservice.component.html',
  styleUrls: ['./myservice.component.css']
})
export class MyserviceComponent implements OnInit {
  goals = [];
  itemCount = 0;
  goalText = 'goal of abc';
  constructor(private router: Router, private _data: DataService) { }

  ngOnInit() {
    this.itemCount = this.goals.length;
    this._data.goal.subscribe(res => this.goals = res);
    this._data.changeGoal(this.goals);

  }


 public addItem() {

debugger;
var random_number = Math.floor(Math.random()*(1000 - 100) + 100);

    this.goalText = 'Gol of xyz, gol number - ' + random_number;
    this.goals.push(this.goalText);

    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }

  public removeItem(i) {
    debugger;
    this.goals.splice(i, 1);
    this._data.changeGoal(this.goals);
  }

  public sendMeHome() {
    debugger;
    this.router.navigate(['']);
  }

}
