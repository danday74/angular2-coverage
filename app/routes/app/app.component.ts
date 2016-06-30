import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: 'build/routes/app/app.component.html',
  styleUrls: ['build/routes/app/app.component.css'],
  directives: [ROUTER_DIRECTIVES]
})

export class AppComponent {
}
