import { Component } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-javaProjet3-page',
  templateUrl: './java-projet3.component.html',
  styleUrls: ['./java-projet3.component.scss']
})
export class JavaProjet3Component {
  openModal(imageSrc: string) {
    const modalImage = document.getElementById('modalImage') as HTMLImageElement;
    modalImage.src = imageSrc;
    const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
    imageModal.show();
  }
}
