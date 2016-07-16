import {addProviders, async, ComponentFixture, inject, TestComponentBuilder} from '@angular/core/testing';
import {Router} from '@angular/router';
import {Mock} from '../../models/mock';
import {Route2Component} from './route2.component';

describe('route2.component.ts', () => {

  beforeEach(() => addProviders([
    {provide: Router, useClass: Mock}
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
    async(inject([TestComponentBuilder, Router], (tcb:TestComponentBuilder, router:Router) => {
      tcb.createAsync(Route2Component).then((fix:ComponentFixture<Route2Component>) => {
        router.navigate = jasmine.createSpy('navigate');
        let instance = fix.componentInstance;
        instance.goToRoute1();
        expect(router.navigate).toHaveBeenCalledWith(['/route1']);
      });
    })));

  it('goToRoute1(id:number)',
    async(inject([TestComponentBuilder, Router], (tcb:TestComponentBuilder, router:Router) => {
      tcb.createAsync(Route2Component).then((fix:ComponentFixture<Route2Component>) => {
        router.navigate = jasmine.createSpy('navigate');
        let instance = fix.componentInstance;
        instance.goToRoute1(10);
        expect(router.navigate).toHaveBeenCalledWith(['/route1', 10]);
      });
    })));

});
