import {HTTP_PROVIDERS} from '@angular/http';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {APP_ROUTER_PROVIDERS} from './app.routes';
import {AppComponent} from './routes/app/app.component';
import 'rxjs/add/observable/throw'; // Needed or browser errors with Observable.throw is not a function

bootstrap(AppComponent, [APP_ROUTER_PROVIDERS, HTTP_PROVIDERS]).catch((err) => console.error(err));
