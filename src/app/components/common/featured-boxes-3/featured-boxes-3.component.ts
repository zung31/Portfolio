import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-featured-boxes-3',
    templateUrl: './featured-boxes-3.component.html',
    styleUrls: ['./featured-boxes-3.component.scss']
})
export class FeaturedBoxes3Component implements OnInit {
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

    constructor(
        public router: Router, private translate: TranslateService
    ) { }

    ngOnInit(): void {
        // Cập nhật bản dịch ban đầu
        this.loadTranslations();
  
        // Đăng ký sự kiện thay đổi ngôn ngữ
        this.translate.onLangChange.subscribe(() => {
            this.loadTranslations();
        });
    }

    loadTranslations() {
        this.translate.get(['FBOX3.P1', 'FBOX3.C1', 'FBOX3.C2', 'FBOX3.C3', 'FBOX3.C4']).subscribe(translations => {
            this.featuredBox[0].icon = translations['FBOX3.P1'];
            this.featuredBox[0].title = translations['FBOX3.C1'];
            this.featuredBox[1].title = translations['FBOX3.C2'];
            this.featuredBox[2].title = translations['FBOX3.C3'];
            this.featuredBox[3].title = translations['FBOX3.C4'];
        });
    }
}