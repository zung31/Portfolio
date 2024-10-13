import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-preview-projets',
    templateUrl: './preview-projets.component.html',
    styleUrls: ['./preview-projets.component.scss']
})
export class PreviewProjetsComponent implements OnInit, AfterViewInit {

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
        const elements = document.querySelectorAll('.img-fluid, .img-fluid2');
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
        const categories = document.querySelectorAll('.img-fluid, .img-fluid2');
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