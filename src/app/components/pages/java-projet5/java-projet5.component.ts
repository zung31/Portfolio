import { Component } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-javaProjet5-page',
  templateUrl: './java-projet5.component.html',
  styleUrls: ['./java-projet5.component.scss']
})
export class JavaProjet5Component {
  openModal(imageSrc: string) {
    const modalImage = document.getElementById('modalImage') as HTMLImageElement;
    modalImage.src = imageSrc;
    const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
    imageModal.show();
  }
}
