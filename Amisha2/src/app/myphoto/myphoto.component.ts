import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'myphoto',
  templateUrl: './myphoto.component.html',
  styleUrls: ['./myphoto.component.css']
})
export class MyphotoComponent implements OnInit {

  @Input() name:any = 'Test' ;

  constructor() { }

  ngOnInit() {
  }

}
