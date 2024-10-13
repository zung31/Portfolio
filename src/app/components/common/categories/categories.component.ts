import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { isPlatformBrowser } from '@angular/common';
import { faAngular,
  faReact,
  faJava,
  faPython,
  faHtml5,
  faPhp} from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, AfterViewInit {

    constructor(
        public router: Router,
        @Inject(PLATFORM_ID) private platformId: Object
    ) { }

    ngOnInit(): void {
      if (isPlatformBrowser(this.platformId)) {
        this.showContent();
      }
    }

    showContent() {
      if (isPlatformBrowser(this.platformId)) {
        const elements = document.querySelectorAll('.category-box');
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

    observeCategories() {
      if (isPlatformBrowser(this.platformId)) {
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

    faAngular = faAngular;
    faReact = faReact;
    faJava = faJava;
    faPython = faPython;
    faHtml5 = faHtml5;
    faPhp = faPhp;
}