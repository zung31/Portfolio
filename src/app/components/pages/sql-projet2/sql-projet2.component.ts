import { Component } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-sqlProjet2-page',
  templateUrl: './sql-projet2.component.html',
  styleUrls: ['./sql-projet2.component.scss']
})
export class SqlProjet2Component {
  openModal(imageSrc: string) {
    const modalImage = document.getElementById('modalImage') as HTMLImageElement;
    modalImage.src = imageSrc;
    const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
    imageModal.show();
  }
}
