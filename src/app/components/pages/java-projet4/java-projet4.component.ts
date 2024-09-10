import { Component } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-javaProjet4-page',
  templateUrl: './java-projet4.component.html',
  styleUrls: ['./java-projet4.component.scss']
})
export class JavaProjet4Component {
  openModal(imageSrc: string) {
    const modalImage = document.getElementById('modalImage') as HTMLImageElement;
    modalImage.src = imageSrc;
    const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
    imageModal.show();
  }
}
