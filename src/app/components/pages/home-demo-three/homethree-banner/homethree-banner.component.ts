import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-homethree-banner',
  templateUrl: './homethree-banner.component.html',
  styleUrls: ['./homethree-banner.component.scss']
})
export class HomethreeBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if (typeof document !== 'undefined') {
      // only run in client-side
      this.showContent();
    }
  }

  showContent() {
    const element = document.getElementById('someElement');
    if (element) {
      element.style.display = 'block';
    }

    const content = document.querySelector('.hero-content');
    if (content) {
      content.classList.add('show');
    }
  }
}
