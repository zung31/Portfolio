import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-preview-projets',
    templateUrl: './preview-projets.component.html',
    styleUrls: ['./preview-projets.component.scss']
})
export class PreviewProjetsComponent implements OnInit {

    constructor(
        public router: Router
    ) { }

    ngOnInit(): void {
      if (typeof document !== 'undefined') {
        // only run in client-side
        this.showContent();
      }
    }

    showContent() {
      const elements = document.querySelectorAll('.img-fluid, .img-fluid2');
      elements.forEach(element => {
        (element as HTMLElement).style.display = 'block';
      });
    }

    ngAfterViewInit(): void {
      this.observeCategories();
    }

    observeCategories() {
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