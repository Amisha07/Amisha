import { Component, OnInit } from '@angular/core';
import{PeopleService} from '../peopleservice.service';
import { Person } from '../person';

@Component({
  selector: 'app-persondetail',
  templateUrl: './persondetail.component.html',
  styleUrls: ['./persondetail.component.css']
})
export class PersondetailComponent implements OnInit {
  public person:Person ;//   {id: 1, name: 'Luke Skywalker', height: 177, weight: 70, profession: ''};
  public persons:Person[];
  public professions:string[] = ['professions 1', 'professions-2', 'professions A1', 'professions-B2']

  savePersonDetails(){
    debugger;
    this.peopleService.save(this.person);
    this.getAllPersons();
    this.person = null;
  }


  getAllPersons()
  {
   this.persons =  this.peopleService.getAll();
  }

  getPerson(id)
  {
   this.person =  this.peopleService.get(id);
  }

 

  constructor(private peopleService: PeopleService) {

   }

  ngOnInit() {
    this.getAllPersons();
  }

}
