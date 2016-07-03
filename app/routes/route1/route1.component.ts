import {Component}            from '@angular/core';
import {ROUTER_DIRECTIVES}    from '@angular/router';
import {PersonService} from '../../services/person.service';

@Component({
  templateUrl: 'build/routes/route1/route1.component.html',
  styleUrls: ['build/routes/route1/route1.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [PersonService]
})

export class Route1Component {
}
