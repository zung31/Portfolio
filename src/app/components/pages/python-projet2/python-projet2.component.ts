import { Component } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-pythonProjet2-page',
  templateUrl: './python-projet2.component.html',
  styleUrls: ['./python-projet2.component.scss']
})
export class PythonProjet2Component {
  openModal(imageSrc: string) {
    const modalImage = document.getElementById('modalImage') as HTMLImageElement;
    modalImage.src = imageSrc;
    const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
    imageModal.show();
  }
}
