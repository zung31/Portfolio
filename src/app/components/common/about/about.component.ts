import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    constructor(
        public router: Router
    ) { }

    ngOnInit(): void {
        this.showContent();
      }
    
    showContent() {
    const content = document.querySelector('.about-image');
        if (content) {
            content.classList.add('show');
        }
    }

    isOpen = false;

    openPopup(): void {
        this.isOpen = true;
    }

    closePopup(): void {
        this.isOpen = false;
    }

}