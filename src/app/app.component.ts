import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Hoang Portfolio';

    constructor(private translate: TranslateService) {
        this.translate.addLangs(['fr', 'en']);
        translate.setDefaultLang('fr');
        // voir si le navigateur a une langue anglaise par défaut, sinon français
        const browserLang = translate.getBrowserLang() || 'fr';
        translate.use(browserLang.match(/fr|en/) ? browserLang : 'fr');
    }
}