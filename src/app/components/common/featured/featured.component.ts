import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-featured',
    templateUrl: './featured.component.html',
    styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {
    featuredBox = [
        {
            icon: `assets/images/featured/icon1.gif`,
            title: ``
        },
        {
            icon: `assets/images/featured/icon2.gif`,
            title: ``
        },
        {
            icon: `assets/images/featured/icon3.gif`,
            title: ``
        },
        {
            icon: `assets/images/featured/icon4.gif`,
            title: ``
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
        this.translate.get(['FEAT.T1', 'FEAT.T2', 'FEAT.T3', 'FEAT.T4']).subscribe(translations => {
            this.featuredBox[0].title = translations['FEAT.T1'];
            this.featuredBox[1].title = translations['FEAT.T2'];
            this.featuredBox[2].title = translations['FEAT.T3'];
            this.featuredBox[3].title = translations['FEAT.T4'];
        });
    }
}