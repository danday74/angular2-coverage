import {APP_BASE_HREF} from '@angular/common';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AppModule} from '../../app.module';

describe('app.component.ts', () => {

  let fix: ComponentFixture<AppComponent>;
  let instance: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}]
    }).compileComponents()
      .then(() => {
        fix = TestBed.createComponent(AppComponent);
        instance = fix.componentInstance;
      });
  }));

  it('should instantiate component', () => {
    expect(instance).toEqual(jasmine.any(AppComponent));
  });

  it('should have expected text', () => {
    let el = fix.debugElement.query(By.css('h1')).nativeElement;
    expect(el.textContent).toMatch(/angular 2 app/i);
  });

});
