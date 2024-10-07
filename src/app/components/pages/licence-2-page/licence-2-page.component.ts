import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-licence-2-page',
  templateUrl: './licence-2-page.component.html',
  styleUrls: ['./licence-2-page.component.scss']
})
export class Licence2PageComponent implements OnInit {

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
