import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-funfacts',
    templateUrl: './funfacts.component.html',
    styleUrls: ['./funfacts.component.scss']
})
export class FunfactsComponent {

    constructor(
        public router: Router
    ) { }

    funfactBox = [
        {
            icon: `flaticon-tick`,
            number: `1er`,
            title: `Major promotion en L1`
        },
        {
            icon: `flaticon-heart`,
            number: ` TB`,
            title: `Classement en L2`
        },
        {
            icon: `flaticon-document`,
            number: `15`,
            title: `Repositories sur Github`
        },
        {
            icon: `flaticon-knowledge-1`,
            number: `20`,
            title: `Note moyenne Math en L2`
        }
    ]

}