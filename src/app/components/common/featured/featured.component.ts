import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-featured',
    templateUrl: './featured.component.html',
    styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent {

    constructor(
        public router: Router
    ) { }

    featuredBox = [
        {
            icon: `assets/images/featured/icon1.gif`,
            title: `Favoriser la connaissance et l'utilisation de la LSF`
        },
        {
            icon: `assets/images/featured/icon2.gif`,
            title: `Promouvoir la culture sourde`
        },
        {
            icon: `assets/images/featured/icon3.gif`,
            title: `Lutter contre les discriminations dont sont victimes les personnes sourdes et malentendantes`
        },
        {
            icon: `assets/images/featured/icon4.gif`,
            title: `Soutenir l'inclusion des personnes sourdes dans la société`
        }
    ]

}