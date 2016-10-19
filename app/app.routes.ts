import {RouterModule, Routes} from '@angular/router';
import {Route1Component} from './routes/route1/route1.component';
import {Route1DetailComponent} from './routes/route1/detail/route1-detail.component';
import {Route1ListComponent} from './routes/route1/list/route1-list.component';
import {Route2Component} from './routes/route2/route2.component';

const routes: Routes = [
  {
    path: 'route1',
    component: Route1Component,
    children: [
      {path: ':id', component: Route1DetailComponent},
      {path: '', component: Route1ListComponent}
    ]
  },
  {path: 'route2', component: Route2Component},
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: '/route1'
  }
];

export const routing = RouterModule.forRoot(routes);
