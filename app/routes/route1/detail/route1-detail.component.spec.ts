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
import {ActivatedRoute} from '@angular/router';
import {MockActivatedRoute} from '../../../mocks/mock-activated-route';
import {persons} from '../../../data/persons';
import {PersonService} from '../../../services/person-service';
import {Route1DetailComponent} from './route1-detail.component';

describe('route1-detail.component.ts', () => {

  beforeEachProviders(() => [
    HTTP_PROVIDERS, // must be first
    {provide: ActivatedRoute, useClass: MockActivatedRoute},
    {provide: XHRBackend, useClass: MockBackend},
    PersonService
  ]);

  it('should instantiate component',
    async(inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
      tcb.createAsync(Route1DetailComponent).then((fixture) => {
        expect(fixture.componentInstance instanceof Route1DetailComponent).toBe(true, 'should instantiate component');
      });
    })));

  it('should have expected text',
    async(inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
      tcb.createAsync(Route1DetailComponent).then((fixture) => {
        let el = fixture.debugElement.query(By.css('section.route1-detail')).nativeElement;
        expect(el.innerText).toMatch(/route 1 detail view/i, 'should have expected text');
      });
    })));

  it('getPerson()',
    async(inject([TestComponentBuilder, XHRBackend], (tcb:TestComponentBuilder, mockBackend:any) => {
      tcb.createAsync(Route1DetailComponent).then((fixture) => {

        mockBackend.connections.subscribe(
          (connection:MockConnection) => {
            connection.mockRespond(new Response(
              new ResponseOptions({
                  body: persons
                }
              )));
          });

        let instance = fixture.componentInstance;
        instance.id = instance.DEFAULT_ID;
        instance.getPerson();
        expect(instance.person.name).toBe('Asa Israel');
      });
    })));

  it('getPerson() invalid ID',
    async(inject([TestComponentBuilder, XHRBackend], (tcb:TestComponentBuilder, mockBackend:any) => {
      tcb.createAsync(Route1DetailComponent).then((fixture) => {

        const INVALID_ID = 9527;

        mockBackend.connections.subscribe(
          (connection:MockConnection) => {
            connection.mockRespond(new Response(
              new ResponseOptions({
                  body: persons
                }
              )));
          });

        let instance = fixture.componentInstance;
        instance.id = INVALID_ID;
        instance.getPerson();
        expect(instance.person).toBeUndefined();
      });
    })));

  it('getPerson() failure',
    async(inject([TestComponentBuilder, XHRBackend], (tcb:TestComponentBuilder, mockBackend:any) => {
      tcb.createAsync(Route1DetailComponent).then((fixture) => {

        mockBackend.connections.subscribe(
          (connection:MockConnection) => {
            connection.mockError(new Error('error'));
          });

        let instance = fixture.componentInstance;
        instance.id = instance.DEFAULT_ID;
        instance.getPerson();
        expect(instance.person).toBeUndefined();
      });
    })));

});
