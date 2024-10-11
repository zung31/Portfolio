import { Component } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-cProjet4-page',
  templateUrl: './c-projet4.component.html',
  styleUrls: ['./c-projet4.component.scss']
})
export class CProjet4Component {
  openModal(imageSrc: string) {
    const modalImage = document.getElementById('modalImage') as HTMLImageElement;
    modalImage.src = imageSrc;
    const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
    imageModal.show();
  }
}
