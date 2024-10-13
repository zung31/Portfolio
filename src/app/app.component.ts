import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import { inject } from '@vercel/analytics';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Hoang Portfolio';

    constructor(private translate: TranslateService, private router: Router) {
        this.translate.addLangs(['fr', 'en']);
        translate.setDefaultLang('fr');
        // voir si le navigateur a une langue anglaise par défaut, sinon français
        const browserLang = translate.getBrowserLang() || 'fr';
        translate.use(browserLang.match(/fr|en/) ? browserLang : 'fr');
    }

    ngOnInit() {
        inject();
    
        // Track each route change
        this.router.events.subscribe(event => {
          if (event instanceof NavigationEnd) {
            // Page view tracking for Vercel Analytics here
          }
        });
      }
}