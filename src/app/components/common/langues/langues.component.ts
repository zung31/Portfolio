import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-langues',
    templateUrl: './langues.component.html',
    styleUrls: ['./langues.component.scss']
})
export class LangueComponent {

    constructor(
        public router: Router
    ) { }

}