import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-funfacts',
    templateUrl: './funfacts.component.html',
    styleUrls: ['./funfacts.component.scss']
})
export class FunfactsComponent implements OnInit, AfterViewInit {
  funfactBox = [
    {
        icon: `flaticon-tick`,
        number: '',
        title: ''
    },
    {
        icon: `flaticon-heart`,
        number: '',
        title: ''
    },
    {
        icon: `flaticon-document`,
        number: '19', 
        title: ''
    },
    {
        icon: `flaticon-knowledge-1`,
        number: '20', 
        title: ''
    }
  ];
    constructor(
        public router: Router, private translate: TranslateService,
        @Inject(PLATFORM_ID) private platformId: Object
    ) {}

    ngOnInit(): void {
      if (isPlatformBrowser(this.platformId)) {
        this.showContent();
      }

      // Cập nhật bản dịch ban đầu
      this.loadTranslations();

      // Đăng ký sự kiện thay đổi ngôn ngữ
      this.translate.onLangChange.subscribe(() => {
          this.loadTranslations();
      });
    }

    showContent() {
      if (isPlatformBrowser(this.platformId)) {
        const elements = document.querySelectorAll('.funfact-item');
        elements.forEach(element => {
          (element as HTMLElement).style.display = 'block';
        });
      }
  }

    ngAfterViewInit(): void {
      if (isPlatformBrowser(this.platformId)) {
        this.observeCategories();
      }
    }

    loadTranslations() {
      this.translate.get(['FUNFACTS.N1', 'FUNFACTS.T1', 'FUNFACTS.N2', 'FUNFACTS.T2', 'FUNFACTS.T3', 'FUNFACTS.T4']).subscribe(translations => {
          this.funfactBox[0].number = translations['FUNFACTS.N1'];
          this.funfactBox[0].title = translations['FUNFACTS.T1'];
          this.funfactBox[1].number = translations['FUNFACTS.N2'];
          this.funfactBox[1].title = translations['FUNFACTS.T2'];
          this.funfactBox[2].title = translations['FUNFACTS.T3'];
          this.funfactBox[3].title = translations['FUNFACTS.T4'];
      });
    }

    observeCategories() {
      if (isPlatformBrowser(this.platformId)) {
        const categories = document.querySelectorAll('.funfact-item');
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
}