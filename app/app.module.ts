import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {routing} from './app.routes';
import {AppComponent}  from './routes/app/app.component';
import {Route1Component} from './routes/route1/route1.component';
import {Route1DetailComponent} from './routes/route1/detail/route1-detail.component';
import {Route1ListComponent} from './routes/route1/list/route1-list.component';
import {Route2Component} from './routes/route2/route2.component';
import {PersonService} from './services/person.service';

@NgModule({
  imports: [BrowserModule, HttpModule, routing], // dependencies
  declarations: [AppComponent, Route1Component, Route1DetailComponent, Route1ListComponent, Route2Component], // components and directives
  bootstrap: [AppComponent], // root component
  providers: [PersonService] // services
})

export class AppModule {
}
