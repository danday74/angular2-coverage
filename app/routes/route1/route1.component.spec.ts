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
import {By} from '@angular/platform-browser';
import {ActivatedRoute, Router, RouterOutletMap} from '@angular/router';
import {MockActivatedRoute} from '../../mocks/mock-activated-route';
import {MockRouter} from '../../mocks/mock-router';
import {Route1Component} from './route1.component';

describe('route1.component.ts', () => {

  beforeEachProviders(() => [
    {provide: ActivatedRoute, useClass: MockActivatedRoute},
    {provide: Router, useClass: MockRouter},
    {provide: RouterOutletMap, useClass: RouterOutletMap}
  ]);

  it('should instantiate component',
    async(inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
      tcb.createAsync(Route1Component).then((fixture) => {
        expect(fixture.componentInstance instanceof Route1Component).toBe(true, 'should instantiate component');
      });
    })));

  it('should have expected text',
    async(inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
      tcb.createAsync(Route1Component).then((fixture) => {
        let el = fixture.debugElement.query(By.css('header.sub')).nativeElement;
        expect(el.innerText).toMatch(/route 1 header/i, 'should have expected text');
      });
    })));
});
