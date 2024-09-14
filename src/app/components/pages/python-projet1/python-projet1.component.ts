import { Component } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-pythonProjet1-page',
  templateUrl: './python-projet1.component.html',
  styleUrls: ['./python-projet1.component.scss']
})
export class PythonProjet1Component {
  openModal(imageSrc: string) {
    const modalImage = document.getElementById('modalImage') as HTMLImageElement;
    modalImage.src = imageSrc;
    const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
    imageModal.show();
  }
}
