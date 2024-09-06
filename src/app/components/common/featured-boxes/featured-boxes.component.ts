import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-featured-boxes',
    templateUrl: './featured-boxes.component.html',
    styleUrls: ['./featured-boxes.component.scss']
})
export class FeaturedBoxesComponent {

    constructor(
        public router: Router
    ) { }

    featuredBox = [
        {
            icon: `assets/images/featured/icon6.gif`,
            title: `Patience et Optimisme`
        },
        {
            icon: `assets/images/featured/icon7.gif`,
            title: `Capacité d’adaptation`
        },
        {
            icon: `assets/images/featured/icon2.gif`,
            title: `Capacité d’organisation`
        },
        {
            icon: `assets/images/featured/icon5.png`,
            title: `Super travail en équipe`
        },
    ]

}