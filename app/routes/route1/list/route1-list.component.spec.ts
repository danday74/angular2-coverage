/* tslint:disable:no-unused-variable */
// noinspection ES6UnusedImports
import {
  expect, it, iit, xit,
  describe, ddescribe, xdescribe,
  beforeEach, beforeEachProviders, withProviders,
  async, inject
} from '@angular/core/testing';
/* tslint:enable:no-unused-variable */

import {TestComponentBuilder} from '@angular/compiler/testing';
import {HTTP_PROVIDERS, Response, ResponseOptions, XHRBackend} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {By} from '@angular/platform-browser';
import {persons} from '../../../data/persons';
import {PersonService} from '../../../services/person-service';
import {Route1ListComponent} from './route1-list.component';

describe('route1-list.component.ts', () => {

  beforeEachProviders(() => [
    HTTP_PROVIDERS, // must be first
    {provide: XHRBackend, useClass: MockBackend},
    PersonService
  ]);

  it('should instantiate component',
    async(inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
      tcb.createAsync(Route1ListComponent).then((fixture) => {
        expect(fixture.componentInstance instanceof Route1ListComponent).toBe(true, 'should instantiate component');
      });
    })));

  it('should have expected text',
    async(inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
      tcb.createAsync(Route1ListComponent).then((fixture) => {
        let el = fixture.debugElement.query(By.css('section.route1-list')).nativeElement;
        expect(el.innerText).toMatch(/route 1 list view/i, 'should have expected text');
      });
    })));

  it('ngOnInit()',
    async(inject([TestComponentBuilder, XHRBackend], (tcb:TestComponentBuilder, mockBackend:any) => {
      tcb.createAsync(Route1ListComponent).then((fixture) => {

        mockBackend.connections.subscribe(
          (connection:MockConnection) => {
            connection.mockRespond(new Response(
              new ResponseOptions({
                  body: persons
                }
              )));
          });

        let instance = fixture.componentInstance;
        instance.ngOnInit();
        expect(instance.persons.length).toBe(3);
      });
    })));

  it('ngOnInit() failure',
    async(inject([TestComponentBuilder, XHRBackend], (tcb:TestComponentBuilder, mockBackend:any) => {
      tcb.createAsync(Route1ListComponent).then((fixture) => {

        mockBackend.connections.subscribe(
          (connection:MockConnection) => {
            connection.mockError(new Error('error'));
          });

        let instance = fixture.componentInstance;
        instance.ngOnInit();
        expect(instance.persons).toBeUndefined();
      });
    })));

});
