import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {

  @Input() familys:any[] = [] ;
  public isShow: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
