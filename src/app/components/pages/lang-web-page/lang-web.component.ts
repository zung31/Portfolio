import { Component } from '@angular/core';
import { Router } from '@angular/router';

declare var bootstrap: any;

@Component({
    selector: 'app-lang-web',
    templateUrl: './lang-web.component.html',
    styleUrls: ['./lang-web.component.scss']
})
export class LangWebComponent {
    openModal(imageSrc: string) {
        const modalImage = document.getElementById('modalImage') as HTMLImageElement;
        modalImage.src = imageSrc;
        const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
        imageModal.show();
    }
}