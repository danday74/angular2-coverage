import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Person} from '../../../models/person';
import {PersonService} from '../../../services/person-service';

@Component({
  templateUrl: 'build/routes/route1/detail/route1-detail.component.html',
  styleUrls: ['build/routes/route1/detail/route1-detail.component.css']
})

export class Route1DetailComponent implements OnInit {
  private id:number;
  private DEFAULT_ID:number = 1;
  private person:Person;

  constructor(public route:ActivatedRoute, private personService:PersonService) {
  }

  /* istanbul ignore next */
  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (isNaN(params['id'])) {
        this.id = this.DEFAULT_ID;
      } else {
        this.id = +params['id'];
      }
      this.getPerson();
    });
  }

  getPerson():void {
    this.personService.getPerson(this.id)
      .subscribe(
        (person) => {
          this.person = person;
        },
        (err) => console.error('oops', err));
  }
}
