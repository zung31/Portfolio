import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lycee-page',
  templateUrl: './lycee-page.component.html',
  styleUrls: ['./lycee-page.component.scss']
})
export class LyceePageComponent implements OnInit{
  
    constructor() { }
  
    ngOnInit(): void {
      this.showContent();
    }
  
    showContent() {
      const content = document.querySelector('.img-fluid');
      if (content) {
        content.classList.add('show');
      }
    }
}
