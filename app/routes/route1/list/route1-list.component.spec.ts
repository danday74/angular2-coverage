import {APP_BASE_HREF} from '@angular/common';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {AppModule} from '../../../app.module';
import {persons} from '../../../data/persons';
import {Route1ListComponent} from './route1-list.component';

// HTTP mocking imports
import {BaseRequestOptions, Http, Response, ResponseOptions} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';

describe('route1-list.component.ts', () => {

  let fix: ComponentFixture<Route1ListComponent>;
  let instance: Route1ListComponent;
  let injector: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [{provide: APP_BASE_HREF, useValue: '/'},
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (pBackend: MockBackend, pOptions: BaseRequestOptions) => {
            return new Http(pBackend, pOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        }]
    }).compileComponents()
      .then(() => {
        fix = TestBed.createComponent(Route1ListComponent);
        instance = fix.componentInstance;
        injector = fix.debugElement.injector;
      });
  }));

  it('should instantiate component', () => {
    expect(instance).toEqual(jasmine.any(Route1ListComponent));
  });

  it('should have expected text', () => {
    let el = fix.debugElement.query(By.css('section.route1-list')).nativeElement;
    expect(el.textContent).toMatch(/route 1 list view/i);
  });

  it('ngOnInit()', async(() => {
    let backend = injector.get(MockBackend);
    backend.connections.subscribe(
      (connection: MockConnection) => {
        connection.mockRespond(new Response(
          new ResponseOptions({
              body: persons
            }
          )));
      });

    fix.detectChanges(); // Calls instance.ngOnInit()
    expect(instance.persons.length).toBe(3);
  }));

  it('ngOnInit() failure', async(() => {
    let backend = injector.get(MockBackend);
    backend.connections.subscribe(
      (connection: MockConnection) => {
        connection.mockError(new Error('error'));
      });

    fix.detectChanges(); // Calls instance.ngOnInit()
    expect(instance.persons).toBeUndefined();
  }));

});
