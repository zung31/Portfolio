import { Component } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-cProjet3-page',
  templateUrl: './c-projet3.component.html',
  styleUrls: ['./c-projet3.component.scss']
})
export class CProjet3Component {
  openModal(imageSrc: string) {
    const modalImage = document.getElementById('modalImage') as HTMLImageElement;
    modalImage.src = imageSrc;
    const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
    imageModal.show();
  }
}
