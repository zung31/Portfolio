import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-featured-boxes',
    templateUrl: './featured-boxes.component.html',
    styleUrls: ['./featured-boxes.component.scss']
})
export class FeaturedBoxesComponent implements OnInit {
    featuredBox = [
        {
            icon: `assets/images/featured/icon6.gif`,
            title: ``
        },
        {
            icon: `assets/images/featured/icon7.gif`,
            title: ``
        },
        {
            icon: `assets/images/featured/icon2.gif`,
            title: ``
        },
        {
            icon: `assets/images/featured/icon5.png`,
            title: ``
        },
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
    
    ngAfterViewInit(): void {
        this.observeCategories();
    }

    loadTranslations() {
        this.translate.get(['FBOX.T1', 'FBOX.T2', 'FBOX.T3', 'FBOX.T4']).subscribe(translations => {
            this.featuredBox[0].title = translations['FBOX.T1'];
            this.featuredBox[1].title = translations['FBOX.T2'];
            this.featuredBox[2].title = translations['FBOX.T3'];
            this.featuredBox[3].title = translations['FBOX.T4'];
        });
    }

    observeCategories() {
        const categories = document.querySelectorAll('.featured-box');
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              console.log('in view');
              entry.target.classList.add('show');
              observer.unobserve(entry.target); // Stop observing once the animation is triggered
            }
          });
        }, {
          threshold: 0.1 // Trigger when 10% of the element is in view
        });
    
        categories.forEach(category => {
          observer.observe(category);
        });
    }
}