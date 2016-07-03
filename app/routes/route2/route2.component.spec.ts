import {addProviders, async, ComponentFixture, inject, TestComponentBuilder} from '@angular/core/testing';
import {Router} from '@angular/router';
import {MockRouter} from '../../mocks/mock-router';
import {Route2Component} from './route2.component';

describe('route2.component.ts', () => {

  beforeEach(() => addProviders([
    {provide: Router, useClass: MockRouter}
  ]));

  it('should instantiate component',
    async(inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
      tcb.createAsync(Route2Component).then((fix:ComponentFixture<Route2Component>) => {
        expect(fix.componentInstance instanceof Route2Component).toBe(true, 'should instantiate component');
      });
    })));

  it('should allow lodash access',
    async(inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
      tcb.createAsync(Route2Component).then((fix:ComponentFixture<Route2Component>) => {
        let instance = fix.componentInstance;
        expect(instance.numArray).toEqual([3, 6, 9]);
      });
    })));

  it('goToRoute1()',
    async(inject([TestComponentBuilder, Router], (tcb:TestComponentBuilder, router:MockRouter) => {
      tcb.createAsync(Route2Component).then((fix:ComponentFixture<Route2Component>) => {
        let instance = fix.componentInstance;
        spyOn(router, 'navigate').and.callThrough();
        instance.goToRoute1();
        expect(router.navigate).toHaveBeenCalledWith(['/route1']);
      });
    })));

  it('goToRoute1(id:number)',
    async(inject([TestComponentBuilder, Router], (tcb:TestComponentBuilder, router:MockRouter) => {
      tcb.createAsync(Route2Component).then((fix:ComponentFixture<Route2Component>) => {
        let instance = fix.componentInstance;
        spyOn(router, 'navigate').and.callThrough();
        instance.goToRoute1(10);
        expect(router.navigate).toHaveBeenCalledWith(['/route1', 10]);
      });
    })));

});
