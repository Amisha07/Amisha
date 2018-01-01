import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input() Products:any[] = [] ;
  constructor() { }

  ngOnInit() {
  }

}
