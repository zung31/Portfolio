import { Component } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-matlabProjet1-page',
  templateUrl: './matlab-projet1.component.html',
  styleUrls: ['./matlab-projet1.component.scss']
})
export class MatlabProjet1Component {
  openModal(imageSrc: string) {
    const modalImage = document.getElementById('modalImage') as HTMLImageElement;
    modalImage.src = imageSrc;
    const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
    imageModal.show();
  }
}
