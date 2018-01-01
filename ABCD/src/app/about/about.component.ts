import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  goals: any;
  constructor(private router: Router, private _data: DataService) { }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
  }
  sendMeHome() {
    this.router.navigate(['']);
  }


}
