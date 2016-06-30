import {HTTP_PROVIDERS} from '@angular/http';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {APP_ROUTER_PROVIDERS} from './app.routes';
import {AppComponent} from './routes/app/app.component';

bootstrap(AppComponent, [APP_ROUTER_PROVIDERS, HTTP_PROVIDERS]).catch((err) => console.error(err));
