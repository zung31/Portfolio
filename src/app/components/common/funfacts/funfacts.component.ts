import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-funfacts',
    templateUrl: './funfacts.component.html',
    styleUrls: ['./funfacts.component.scss']
})
export class FunfactsComponent implements OnInit {

    constructor(
        public router: Router
    ) { }

    ngOnInit(): void {}

    ngAfterViewInit(): void {
      this.observeCategories();
    }

    observeCategories() {
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

    funfactBox = [
        {
            icon: `flaticon-tick`,
            number: `1er`,
            title: `Major promotion en L1`
        },
        {
            icon: `flaticon-heart`,
            number: ` TB`,
            title: `Classement en L2`
        },
        {
            icon: `flaticon-document`,
            number: `18`,
            title: `Repositories sur Github`
        },
        {
            icon: `flaticon-knowledge-1`,
            number: `20`,
            title: `Note moyenne Math en L2`
        }
    ]

}