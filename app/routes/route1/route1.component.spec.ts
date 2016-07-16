import {addProviders, async, ComponentFixture, inject, TestComponentBuilder} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {ActivatedRoute, Router, RouterOutletMap} from '@angular/router';
import {Mock} from '../../models/mock';
import {Route1Component} from './route1.component';

describe('route1.component.ts', () => {

  beforeEach(() => addProviders([
    {provide: ActivatedRoute, useClass: Mock},
    {provide: Router, useClass: Mock},
    {provide: RouterOutletMap, useClass: RouterOutletMap}
  ]));

  it('should instantiate component',
    async(inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
      tcb.createAsync(Route1Component).then((fix:ComponentFixture<Route1Component>) => {
        expect(fix.componentInstance instanceof Route1Component).toBe(true, 'should instantiate component');
      });
    })));

  it('should have expected text',
    async(inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
      tcb.createAsync(Route1Component).then((fix:ComponentFixture<Route1Component>) => {
        let el = fix.debugElement.query(By.css('header.sub')).nativeElement;
        expect(el.innerText).toMatch(/route 1 header/i, 'should have expected text');
      });
    })));

});
