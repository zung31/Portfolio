import { Component } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-cProjet2-page',
  templateUrl: './c-projet2.component.html',
  styleUrls: ['./c-projet2.component.scss']
})
export class CProjet2Component {
  openModal(imageSrc: string) {
    const modalImage = document.getElementById('modalImage') as HTMLImageElement;
    modalImage.src = imageSrc;
    const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
    imageModal.show();
  }
}
