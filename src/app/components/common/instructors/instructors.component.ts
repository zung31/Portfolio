import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { faTableTennis,
    faBook,
    faMusic,
    faSwimmer,
    faPalette,
    faGamepad
 } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-instructors',
    templateUrl: './instructors.component.html',
    styleUrls: ['./instructors.component.scss']
})
export class InstructorsComponent implements OnInit {
    sectionTitle = [
        {
            title: `Mes intérêts`,
            paragraph: ``
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

    ngAfterViewInit(): void {
        this.observeCategories();
    }

    loadTranslations() {
        this.translate.get(['INSTRUC.TITLE', 'INSTRUC.P1']).subscribe(translations => {
            this.sectionTitle[0].title = translations['INSTRUC.TITLE'];
            this.sectionTitle[0].paragraph = translations['INSTRUC.P1'];
        });
    }

    observeCategories() {
        const categories = document.querySelectorAll('.category-box');
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
    
    customOptions: any = {
        loop: true,
        margin: 10,
        mouseDrag: false,
        touchDrag: true,
        pullDrag: false,
        dots: true,
        navSpeed: 600,
        navText: [],
        responsive: {
          0: {
            items: 1
          }
        },
        nav: false
    };

    faBadminton = faTableTennis;
    faBook = faBook;
    faMusic = faMusic;
    faSwimmer = faSwimmer;
    faPalette = faPalette;
    faGamepad = faGamepad;
}