import { Component } from '@angular/core';
import { Router } from '@angular/router';

declare var bootstrap: any;

@Component({
    selector: 'app-lindo',
    templateUrl: './lindo.component.html',
    styleUrls: ['./lindo.component.scss']
})
export class LindoComponent {
    openModal(imageSrc: string) {
        const modalImage = document.getElementById('modalImage') as HTMLImageElement;
        modalImage.src = imageSrc;
        const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
        imageModal.show();
    }
}