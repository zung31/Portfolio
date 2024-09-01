import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { faTableTennis,
    faBook,
    faMusic,
    faSwimmer,
    faPalette,
    faGamepad
 } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-instructors',
    templateUrl: './instructors.component.html',
    styleUrls: ['./instructors.component.scss']
})
export class InstructorsComponent {

    sectionTitle = [
        {
            title: `Mes intérêts`,
            paragraph: `En plus de coder et d’étudier à l’école, j’ai aussi des passe-temps.

            Grâce à ces éléments, je peux réduire le stress, me concentrer davantage et obtenir de meilleures performances au travail.`
        }
    ]
    
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