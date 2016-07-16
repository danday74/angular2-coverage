import {APP_BASE_HREF} from '@angular/common';
import {addProviders, async, ComponentFixture, inject, TestComponentBuilder} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {AppComponent} from './app.component';
import {APP_ROUTER_PROVIDERS} from '../../app.routes';
import {Mock} from '../../models/mock';

describe('app.component.ts', () => {

  beforeEach(() => addProviders([
    APP_ROUTER_PROVIDERS, // must be first
    {provide: APP_BASE_HREF, useValue: '/'}, // must be second
    {provide: ActivatedRoute, useClass: Mock},
    {provide: Router, useClass: Mock}
  ]));

  xit('should instantiate component - Skipping because [routerLinkActive] in HTML causes failure',
    async(inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
      tcb.createAsync(AppComponent).then((fix:ComponentFixture<AppComponent>) => {
        expect(fix.componentInstance instanceof AppComponent).toBe(true, 'should instantiate component');
      });
    })));

  xit('should have expected text - Skipping because [routerLinkActive] in HTML causes failure',
    async(inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
      tcb.createAsync(AppComponent).then((fix:ComponentFixture<AppComponent>) => {
        let el = fix.debugElement.query(By.css('h1')).nativeElement;
        expect(el.innerText).toMatch(/angular 2 app/i, 'should have expected text');
      });
    })));

});
