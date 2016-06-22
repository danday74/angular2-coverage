/* tslint:disable:no-unused-variable */
import {AppComponent} from './app.component';

import {
    expect, it, iit, xit,
    describe, ddescribe, xdescribe,
    beforeEach, beforeEachProviders, withProviders,
    async, inject
} from '@angular/core/testing';

import {TestComponentBuilder} from '@angular/compiler/testing';
import {By}             from '@angular/platform-browser';
import {provide}        from '@angular/core';
import {ViewMetadata}   from '@angular/core';
import {PromiseWrapper} from '@angular/core/src/facade/promise';

describe('app.component.ts', () => {

    describe('Smoke test', () => {
        it('should run a passing test', () => {
            expect(true).toEqual(true, 'should pass');
        });
    });

    describe('with TestComponentBuilder (TCB)', () => {

        it('should instantiate component',
            async(inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
                tcb.createAsync(AppComponent).then(fixture => {
                    expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
                });
            })));

        it('should have expected <h1> text',
            async(inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
                tcb.createAsync(AppComponent).then(fixture => {
                    // fixture.detectChanges(); // would need to resolve a binding but we don't have a binding
                    // let h1 = fixture.debugElement.query(el => el.name === 'h1').nativeElement; // it works
                    let h1 = fixture.debugElement.query(By.css('h1')).nativeElement; // preferred
                    expect(h1.innerText).toMatch(/angular 3 app/i, '<h1> should say something about "Angular 3 App"');
                });
            })));

        it('should have expected <h2> text',
            async(inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
                tcb.createAsync(AppComponent).then(fixture => {
                    let h2 = fixture.debugElement.query(By.css('h2')).nativeElement;
                    expect(h2.innerText).toMatch(/welcome/i, '<h2> should say something about "Welcome"');
                });
            })));
    });
});
