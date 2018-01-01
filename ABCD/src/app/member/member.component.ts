import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  @Input() family:any = {} ;
  @Input() idx: any ;


Familys: any[] =
[{
        "Member": "A",
        "Age": "50",
        "Relation": "B",
        
    }, {
      "Member": "A",
      "Age": "50",
      "Relation": "B",

    }, {
        "Member": "A",
        "Age": "50",
        "Relation": "B",
        
    }, {
      "Member": "A",
      "Age": "50",
      "Relation": "B",
        
    }, {
      "Member": "A",
      "Age": "50",
      "Relation": "B",
   
    }

]

  constructor() { }

  ngOnInit() {
  }

}
