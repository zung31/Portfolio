import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-featured-boxes-2',
    templateUrl: './featured-boxes-2.component.html',
    styleUrls: ['./featured-boxes-2.component.scss']
})
export class FeaturedBoxes2Component implements OnInit {
    featuredBox = [
        {
            icon: '',
            title: ''
        },
        {
            icon: `20`,
            title: ''
        },
        {
            icon: `15+`,
            title: ''
        },
        {
            icon: `940`,
            title: `Score TOEIC ETS`
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
        this.translate.get(['FBOX2.C1', 'FBOX2.C2', 'FBOX2.C3', 'FBOX2.P1']).subscribe(translations => {
            this.featuredBox[0].icon = translations['FBOX2.P1'];
            this.featuredBox[0].title = translations['FBOX2.C1'];
            this.featuredBox[1].title = translations['FBOX2.C2'];
            this.featuredBox[2].title = translations['FBOX2.C3'];
        });
    }
}