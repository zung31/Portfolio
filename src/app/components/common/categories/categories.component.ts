import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
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
export class CategoriesComponent {

    constructor(
        public router: Router
    ) { }

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