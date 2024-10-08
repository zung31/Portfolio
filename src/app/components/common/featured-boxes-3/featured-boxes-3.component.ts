import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-featured-boxes-3',
    templateUrl: './featured-boxes-3.component.html',
    styleUrls: ['./featured-boxes-3.component.scss']
})
export class FeaturedBoxes3Component {

    constructor(
        public router: Router, private translate: TranslateService
    ) { }

    featuredBox = [
        {
            icon: this.translate.instant('FBOX3.P1'),
            title: this.translate.instant('FBOX3.C1')
        },
        {
            icon: `17.1`,
            title: this.translate.instant('FBOX3.C2')
        },
        {
            icon: `19`,
            title: this.translate.instant('FBOX3.C3')
        },
        {
            icon: `2`,
            title: this.translate.instant('FBOX3.C4')
        }
    ]

}