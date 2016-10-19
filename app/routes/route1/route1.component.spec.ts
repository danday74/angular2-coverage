import {APP_BASE_HREF} from '@angular/common';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {AppModule} from '../../app.module';
import {Route1Component} from './route1.component';

describe('route1.component.ts', () => {

  let fix: ComponentFixture<Route1Component>;
  let instance: Route1Component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}]
    }).compileComponents()
      .then(() => {
        fix = TestBed.createComponent(Route1Component);
        instance = fix.componentInstance;
      });
  }));

  it('should instantiate component', () => {
    expect(instance).toEqual(jasmine.any(Route1Component));
  });

  it('should have expected text', () => {
    let el = fix.debugElement.query(By.css('header.sub')).nativeElement;
    expect(el.textContent).toMatch(/route 1 header/i);
  });

});
