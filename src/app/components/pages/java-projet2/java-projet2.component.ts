import { Component } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-javaProjet2-page',
  templateUrl: './java-projet2.component.html',
  styleUrls: ['./java-projet2.component.scss']
})
export class JavaProjet2Component {
  openModal(imageSrc: string) {
    const modalImage = document.getElementById('modalImage') as HTMLImageElement;
    modalImage.src = imageSrc;
    const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
    imageModal.show();
  }
}
