import {Component} from '@angular/core';
import {Router} from '@angular/router';
// noinspection TypeScriptCheckImport
import * as _ from 'lodash';

@Component({
  templateUrl: 'build/routes/route2/route2.component.html',
  styleUrls: ['build/routes/route2/route2.component.css']
})

export class Route2Component {
  // noinspection JSMismatchedCollectionQueryUpdate
  private numArray:number[];

  constructor(private router:Router) {
    // numArray is an array of numbers and thus type can be inferred
    this.numArray = _.map([1, 2, 3], (n) => {
      return n * 3;
    });
  }

  goToRoute1(id:number):void {
    if (id == null) {
      this.router.navigate(['/route1']);
    } else {
      this.router.navigate(['/route1', id]);
    }
  }
}
