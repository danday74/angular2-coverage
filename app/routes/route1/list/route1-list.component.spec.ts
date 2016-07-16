import {addProviders, async, ComponentFixture, inject, TestComponentBuilder} from '@angular/core/testing';
import {HTTP_PROVIDERS, Response, ResponseOptions, XHRBackend} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {By} from '@angular/platform-browser';
import {persons} from '../../../data/persons';
import {Route1ListComponent} from './route1-list.component';
import {PersonService} from '../../../services/person.service';

describe('route1-list.component.ts', () => {

  beforeEach(() => addProviders([
    HTTP_PROVIDERS, // must be first
    {provide: XHRBackend, useClass: MockBackend},
    PersonService
  ]));

  it('should instantiate component',
    async(inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
      tcb.createAsync(Route1ListComponent).then((fix:ComponentFixture<Route1ListComponent>) => {
        expect(fix.componentInstance instanceof Route1ListComponent).toBe(true, 'should instantiate component');
      });
    })));

  it('should have expected text',
    async(inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
      tcb.createAsync(Route1ListComponent).then((fix:ComponentFixture<Route1ListComponent>) => {
        let el = fix.debugElement.query(By.css('section.route1-list')).nativeElement;
        expect(el.innerText).toMatch(/route 1 list view/i, 'should have expected text');
      });
    })));

  it('ngOnInit()',
    async(inject([TestComponentBuilder, XHRBackend], (tcb:TestComponentBuilder, mockBackend:MockBackend) => {
      tcb.createAsync(Route1ListComponent).then((fix:ComponentFixture<Route1ListComponent>) => {

        mockBackend.connections.subscribe(
          (connection:MockConnection) => {
            connection.mockRespond(new Response(
              new ResponseOptions({
                  body: persons
                }
              )));
          });

        let instance = fix.componentInstance;
        instance.ngOnInit();
        expect(instance.persons.length).toBe(3);
      });
    })));

  it('ngOnInit() failure',
    async(inject([TestComponentBuilder, XHRBackend], (tcb:TestComponentBuilder, mockBackend:MockBackend) => {
      tcb.createAsync(Route1ListComponent).then((fix:ComponentFixture<Route1ListComponent>) => {

        mockBackend.connections.subscribe(
          (connection:MockConnection) => {
            connection.mockError(new Error('error'));
          });

        let instance = fix.componentInstance;
        instance.ngOnInit();
        expect(instance.persons).toBeUndefined();
      });
    })));

});
