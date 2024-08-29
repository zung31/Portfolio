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
            icon: `assets/images/featured/icon1.gif`,
            title: `Démocratiser la Langue des Signes Française`
        },
        {
            icon: `assets/images/featured/icon2.gif`,
            title: `Lutter contre les discriminations`
        },
        {
            icon: `assets/images/featured/icon3.gif`,
            title: `Promouvoir largement la culture sourde`
        },
        {
            icon: `assets/images/featured/icon4.gif`,
            title: `Favoriser l'inclusion des sourds dans la société`
        }
    ]

}