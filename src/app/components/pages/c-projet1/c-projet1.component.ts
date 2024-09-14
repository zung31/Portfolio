import { Component } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-cProjet1-page',
  templateUrl: './c-projet1.component.html',
  styleUrls: ['./c-projet1.component.scss']
})
export class CProjet1Component {
  openModal(imageSrc: string) {
    const modalImage = document.getElementById('modalImage') as HTMLImageElement;
    modalImage.src = imageSrc;
    const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
    imageModal.show();
  }
}
