import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<h1 class="ooooo">My Firstxxx Spongular 5 Wapp</h1>',
    styleUrls: ['/build/app.component.css']
})

export class AppComponent {
    public myTxt:string;

    constructor() {
        this.myTxt = 'uncovered - highlight me';
        if (false === true) {
            console.log(this.myTxt);
        }
    }
}
