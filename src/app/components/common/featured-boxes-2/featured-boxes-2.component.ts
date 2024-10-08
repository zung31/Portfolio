import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-featured-boxes-2',
    templateUrl: './featured-boxes-2.component.html',
    styleUrls: ['./featured-boxes-2.component.scss']
})
export class FeaturedBoxes2Component {

    constructor(
        public router: Router, private translate: TranslateService
    ) { }

    featuredBox = [
        {
            icon: this.translate.instant('FBOX2.P1'),
            title: this.translate.instant('FBOX2.C1')
        },
        {
            icon: `20`,
            title: this.translate.instant('FBOX2.C2')
        },
        {
            icon: `15+`,
            title: this.translate.instant('FBOX2.C3')
        },
        {
            icon: `940`,
            title: `Score TOEIC ETS`
        }
    ]

}