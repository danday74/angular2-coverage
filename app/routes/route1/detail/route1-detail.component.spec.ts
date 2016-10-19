import {APP_BASE_HREF} from '@angular/common';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {AppModule} from '../../../app.module';
import {persons} from '../../../data/persons';
import {Route1DetailComponent} from './route1-detail.component';

// HTTP mocking imports
import {BaseRequestOptions, Http, Response, ResponseOptions} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';

describe('route1-detail.component.ts', () => {

  let fix: ComponentFixture<Route1DetailComponent>;
  let instance: Route1DetailComponent;
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
        fix = TestBed.createComponent(Route1DetailComponent);
        instance = fix.componentInstance;
        injector = fix.debugElement.injector;
      });
  }));

  it('should instantiate component', () => {
    expect(instance).toEqual(jasmine.any(Route1DetailComponent));
  });

  it('should have expected text', () => {
    let el = fix.debugElement.query(By.css('section.route1-detail')).nativeElement;
    expect(el.textContent).toMatch(/route 1 detail view/i);
  });

  it('getPerson()', async(() => {
    let backend = injector.get(MockBackend);
    backend.connections.subscribe(
      (connection: MockConnection) => {
        connection.mockRespond(new Response(
          new ResponseOptions({
              body: persons
            }
          )));
      });

    instance.getPerson(instance.DEFAULT_ID);
    expect(instance.person.name).toBe('Asa Israel');
  }));

  it('getPerson() invalid ID', async(() => {
    const INVALID_ID = 9527;

    let backend = injector.get(MockBackend);
    backend.connections.subscribe(
      (connection: MockConnection) => {
        connection.mockRespond(new Response(
          new ResponseOptions({
              body: persons
            }
          )));
      });

    instance.getPerson(INVALID_ID);
    expect(instance.person).toBeUndefined();
  }));

  it('getPerson() failure', async(() => {
    let backend = injector.get(MockBackend);
    backend.connections.subscribe(
      (connection: MockConnection) => {
        connection.mockError(new Error('error'));
      });

    instance.getPerson(instance.DEFAULT_ID);
    expect(instance.person).toBeUndefined();
  }));

});
