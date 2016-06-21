import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'build/app.component.html',
    styleUrls: ['build/app.component.css']
})

export class AppComponent {
    public myTxt:string;

    constructor() {
        this.myTxt = 'uncovered - ooooo'
        if (false === true) {
            console.log(this.myTxt);
        }
    }
}
