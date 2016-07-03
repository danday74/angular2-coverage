import {Component, OnInit} from '@angular/core';
import {Person} from '../../../models/person';
import {PersonService} from '../../../services/person.service';

@Component({
  templateUrl: 'build/routes/route1/list/route1-list.component.html',
  styleUrls: ['build/routes/route1/list/route1-list.component.css']
})

export class Route1ListComponent implements OnInit {
  // noinspection JSMismatchedCollectionQueryUpdate
  private persons:Person[];

  constructor(private personService:PersonService) {
    console.log('Look at me in Chrome, sourcemaps are working!');
  }

  ngOnInit() {
    this.personService.getPersons()
      .subscribe(
        (persons) => {
          this.persons = persons;
        },
        (err) => console.error('oops', err));
  }
}
