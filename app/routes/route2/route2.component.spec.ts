import {APP_BASE_HREF} from '@angular/common';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Router} from '@angular/router';
import {AppModule} from '../../app.module';
import {Route2Component} from './route2.component';

describe('route2.component.ts', () => {

  let fix: ComponentFixture<Route2Component>;
  let instance: Route2Component;
  let injector: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}]
    }).compileComponents()
      .then(() => {
        fix = TestBed.createComponent(Route2Component);
        instance = fix.componentInstance;
        injector = fix.debugElement.injector;
      });
  }));

  it('should instantiate component', () => {
    expect(instance).toEqual(jasmine.any(Route2Component));
  });

  it('should allow lodash access', () => {
    expect(instance.numArray).toEqual([3, 6, 9]);
  });

  it('goToRoute1()', () => {
    let router = injector.get(Router);
    router.navigate = jasmine.createSpy('navigate');
    instance.goToRoute1();
    expect(router.navigate).toHaveBeenCalledWith(['/route1']);
  });

  it('goToRoute1(id: number)', () => {
    let router = injector.get(Router);
    router.navigate = jasmine.createSpy('navigate');
    instance.goToRoute1(10);
    expect(router.navigate).toHaveBeenCalledWith(['/route1', 10]);
  });

});
