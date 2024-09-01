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
            title: `Un collaborateur digne de confiance soumet toujours le code avant la date limite`
        },
        {
            icon: `assets/images/featured/icon2.gif`,
            title: `Un étudiant assidu et progressiste`
        },
        {
            icon: `assets/images/featured/icon3.gif`,
            title: `Persévérer à corriger les bugs jusqu'à ce que le programme fonctionne`
        },
        {
            icon: `assets/images/featured/icon4.gif`,
            title: `Résoudre des problèmes maths est aussi un plaisir`
        }
    ]

}