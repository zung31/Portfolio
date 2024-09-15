import { Component } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-matlabProjet2-page',
  templateUrl: './matlab-projet2.component.html',
  styleUrls: ['./matlab-projet2.component.scss']
})
export class MatlabProjet2Component {
  openModal(imageSrc: string) {
    const modalImage = document.getElementById('modalImage') as HTMLImageElement;
    modalImage.src = imageSrc;
    const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
    imageModal.show();
  }
}
