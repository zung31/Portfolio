import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-featured-boxes-2',
    templateUrl: './featured-boxes-2.component.html',
    styleUrls: ['./featured-boxes-2.component.scss']
})
export class FeaturedBoxes2Component {

    constructor(
        public router: Router
    ) { }

    featuredBox = [
        {
            icon: `TB`,
            title: `Classement en Licence 2`
        },
        {
            icon: `20`,
            title: `Moyennes de Math Info`
        },
        {
            icon: `15+`,
            title: `Rapports réalisés en L2`
        },
        {
            icon: `940`,
            title: `Score TOEIC ETS`
        }
    ]

}