import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-informatique',
    templateUrl: './informatique.component.html',
    styleUrls: ['./informatique.component.scss']
})
export class InformatiqueComponent {

    constructor(
        public router: Router
    ) { }

    selectedTab: string = 'IDE'; 
    selectTab(tab: string) {
        this.selectedTab = tab;
    }
}