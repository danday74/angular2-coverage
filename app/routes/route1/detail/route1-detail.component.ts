import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Person} from '../../../models/person';
import 'rxjs/add/operator/publish';
import {PersonService} from '../../../services/person.service';

@Component({
  templateUrl: 'build/routes/route1/detail/route1-detail.component.html',
  styleUrls: ['build/routes/route1/detail/route1-detail.component.css']
})

export class Route1DetailComponent implements OnInit {
  private DEFAULT_ID:number = 1;
  private person:Person;

  constructor(public route:ActivatedRoute, private personService:PersonService) {
  }

  /* istanbul ignore next */
  ngOnInit() {

    let paramsStream = this.route.params
      .map((params) => parseInt(params['id'], 10))
      .map((id) => !isNaN(id) ? id : this.DEFAULT_ID);

    // We use flatMap instead of map to prevent this stream being a metastream - i.e. stream of streams
    let responseStream = paramsStream.flatMap((id) => {
      // noinspection UnnecessaryLocalVariableJS
      let personStream = this.personService.getPerson(id);
      return personStream;
    }).publish().refCount();

    responseStream.subscribe((person:Person) => {
        this.person = person;
      },
      (err) => console.error('oops', err)
    );
  }

  // For testing purposes only since ngOnInit() is currently ignored
  // The correct RXJS approach is seen above
  getPerson(id:number):void {
    this.personService.getPerson(id)
      .subscribe(
        (person) => {
          this.person = person;
        },
        (err) => console.error('oops', err));
  }
}
