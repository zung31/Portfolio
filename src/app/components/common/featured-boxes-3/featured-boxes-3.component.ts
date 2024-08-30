import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-featured-boxes-3',
    templateUrl: './featured-boxes-3.component.html',
    styleUrls: ['./featured-boxes-3.component.scss']
})
export class FeaturedBoxes3Component {

    constructor(
        public router: Router
    ) { }

    featuredBox = [
        {
            icon: `1er`,
            title: `Major Promotion de L1`
        },
        {
            icon: `17.1`,
            title: `Note moyenne de L1`
        },
        {
            icon: `19`,
            title: `Moyenne en Info`
        },
        {
            icon: `2`,
            title: `Projets académiques`
        }
    ]

}