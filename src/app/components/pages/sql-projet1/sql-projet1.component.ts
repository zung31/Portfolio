import { Component } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-sqlProjet1-page',
  templateUrl: './sql-projet1.component.html',
  styleUrls: ['./sql-projet1.component.scss']
})
export class SqlProjet1Component {
  openModal(imageSrc: string) {
    const modalImage = document.getElementById('modalImage') as HTMLImageElement;
    modalImage.src = imageSrc;
    const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
    imageModal.show();
  }
}
