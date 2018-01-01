import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

@Input() name: any = '';

  constructor() { }

  ngOnInit() {
  }

}
