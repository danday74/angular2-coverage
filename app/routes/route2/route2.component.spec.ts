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
import {Router} from '@angular/router';
import {MockRouter} from '../../mocks/mock-router';
import {Route2Component} from './route2.component';

describe('route2.component.ts', () => {

  beforeEachProviders(() => [
    {provide: Router, useClass: MockRouter}
  ]);

  it('should instantiate component',
    async(inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
      tcb.createAsync(Route2Component).then((fixture) => {
        expect(fixture.componentInstance instanceof Route2Component).toBe(true, 'should instantiate component');
      });
    })));

  it('should allow lodash access',
    async(inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
      tcb.createAsync(Route2Component).then((fixture) => {
        let instance = fixture.componentInstance;
        expect(instance.numArray).toEqual([3, 6, 9]);
      });
    })));

  it('goToRoute1()',
    async(inject([TestComponentBuilder, Router], (tcb:TestComponentBuilder, router:MockRouter) => {
      tcb.createAsync(Route2Component).then((fixture) => {
        let instance = fixture.componentInstance;
        spyOn(router, 'navigate').and.callThrough();
        instance.goToRoute1();
        expect(router.navigate).toHaveBeenCalledWith(['/route1']);
      });
    })));

  it('goToRoute1(id:number)',
    async(inject([TestComponentBuilder, Router], (tcb:TestComponentBuilder, router:MockRouter) => {
      tcb.createAsync(Route2Component).then((fixture) => {
        let instance = fixture.componentInstance;
        spyOn(router, 'navigate').and.callThrough();
        instance.goToRoute1(10);
        expect(router.navigate).toHaveBeenCalledWith(['/route1', 10]);
      });
    })));

});
