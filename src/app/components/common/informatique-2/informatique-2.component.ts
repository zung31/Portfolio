import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-informatique2',
    templateUrl: './informatique-2.component.html',
    styleUrls: ['./informatique-2.component.scss']
})
export class Informatique2Component {
    constructor(
        public router: Router
    ) { }

    selectedTab: string = 'CakeOrder'; 
    selectTab(tab: string) {
        this.selectedTab = tab;
    }
}