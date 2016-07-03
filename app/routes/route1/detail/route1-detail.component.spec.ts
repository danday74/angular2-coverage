import {addProviders, async, ComponentFixture, inject, TestComponentBuilder} from '@angular/core/testing';
import {HTTP_PROVIDERS, Response, ResponseOptions, XHRBackend} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {By} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
import {persons} from '../../../data/persons';
import {MockActivatedRoute} from '../../../mocks/mock-activated-route';
import {Route1DetailComponent} from './route1-detail.component';
import {PersonService} from '../../../services/person.service';

describe('route1-detail.component.ts', () => {

  beforeEach(() => addProviders([
    HTTP_PROVIDERS, // must be first
    {provide: ActivatedRoute, useClass: MockActivatedRoute},
    {provide: XHRBackend, useClass: MockBackend},
    PersonService
  ]));

  it('should instantiate component',
    async(inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
      tcb.createAsync(Route1DetailComponent).then((fix:ComponentFixture<Route1DetailComponent>) => {
        expect(fix.componentInstance instanceof Route1DetailComponent).toBe(true, 'should instantiate component');
      });
    })));

  it('should have expected text',
    async(inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
      tcb.createAsync(Route1DetailComponent).then((fix:ComponentFixture<Route1DetailComponent>) => {
        let el = fix.debugElement.query(By.css('section.route1-detail')).nativeElement;
        expect(el.innerText).toMatch(/route 1 detail view/i, 'should have expected text');
      });
    })));

  it('getPerson()',
    async(inject([TestComponentBuilder, XHRBackend], (tcb:TestComponentBuilder, mockBackend:any) => {
      tcb.createAsync(Route1DetailComponent).then((fix:ComponentFixture<Route1DetailComponent>) => {

        mockBackend.connections.subscribe(
          (connection:MockConnection) => {
            connection.mockRespond(new Response(
              new ResponseOptions({
                  body: persons
                }
              )));
          });

        let instance = fix.componentInstance;
        instance.getPerson(instance.DEFAULT_ID);
        expect(instance.person.name).toBe('Asa Israel');
      });
    })));

  it('getPerson() invalid ID',
    async(inject([TestComponentBuilder, XHRBackend], (tcb:TestComponentBuilder, mockBackend:any) => {
      tcb.createAsync(Route1DetailComponent).then((fix:ComponentFixture<Route1DetailComponent>) => {

        const INVALID_ID = 9527;

        mockBackend.connections.subscribe(
          (connection:MockConnection) => {
            connection.mockRespond(new Response(
              new ResponseOptions({
                  body: persons
                }
              )));
          });

        let instance = fix.componentInstance;
        instance.getPerson(INVALID_ID);
        expect(instance.person).toBeUndefined();
      });
    })));

  it('getPerson() failure',
    async(inject([TestComponentBuilder, XHRBackend], (tcb:TestComponentBuilder, mockBackend:any) => {
      tcb.createAsync(Route1DetailComponent).then((fix:ComponentFixture<Route1DetailComponent>) => {

        mockBackend.connections.subscribe(
          (connection:MockConnection) => {
            connection.mockError(new Error('error'));
          });

        let instance = fix.componentInstance;
        instance.getPerson(instance.DEFAULT_ID);
        expect(instance.person).toBeUndefined();
      });
    })));

});
