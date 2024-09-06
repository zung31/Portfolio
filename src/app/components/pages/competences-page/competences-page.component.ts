import { Component } from '@angular/core';

@Component({
  selector: 'app-competences-page',
  templateUrl: './competences-page.component.html',
  styleUrls: ['./competences-page.component.scss']
})
export class CompetencesPageComponent {
  activeContent: string = 'relationnelle';

  showContent(content: string) {
    this.activeContent = content;
  }
}
