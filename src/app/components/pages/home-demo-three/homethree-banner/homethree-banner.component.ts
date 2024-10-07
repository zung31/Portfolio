import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-homethree-banner',
  templateUrl: './homethree-banner.component.html',
  styleUrls: ['./homethree-banner.component.scss']
})
export class HomethreeBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.showContent();
  }

  showContent() {
    const content = document.querySelector('.hero-content');
    if (content) {
      content.classList.add('show');
    }
  }
}
