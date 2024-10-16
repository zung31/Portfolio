import { Component, Input, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-partner',
    templateUrl: './partner.component.html',
    styleUrls: ['./partner.component.scss']
})
export class PartnerComponent implements OnInit, AfterViewInit {

    @Input() title? : string; // decorate the property with @Input()
    constructor(
        public router: Router,
        @Inject(PLATFORM_ID) private platformId: Object
    ) { }

    ngOnInit(): void {
        if (isPlatformBrowser(this.platformId)) {
            this.showContent();
        }
    }

    showContent() {
        if (isPlatformBrowser(this.platformId)) {
            const elements = document.querySelectorAll('.partner-item');
            elements.forEach(element => {
                (element as HTMLElement).style.display = 'block';
            });
        }
    }

    ngAfterViewInit(): void {
        if (isPlatformBrowser(this.platformId)) {
            this.observeCategories();
        }
    }

    observeCategories() {
        if (isPlatformBrowser(this.platformId)) {
            const categories = document.querySelectorAll('.partner-item');
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log('in view');
                    entry.target.classList.add('show');
                    observer.unobserve(entry.target); // Stop observing once the animation is triggered
                }
                });
            }, {
                threshold: 0.1 // Trigger when 10% of the element is in view
            });
        
            categories.forEach(category => {
                observer.observe(category);
            });
        }
    }

    partnerContentBottom = [
        {
            list: [
                {
                    img: `assets/images/partners/code-stable.webp`
,link:  `https://code.visualstudio.com/`
                },
                {
                    img: `assets/images/partners/R.webp`
,link:  `https://lp.jetbrains.com/intellij-idea-promo/`
                },
                {
                    img: `assets/images/partners/eclipse.webp`
,link:  `https://eclipseide.org/`
                },
                {
                    img: `assets/images/partners/sql.webp`
,link:  `https://www.mysql.com/products/workbench/`
                },
                {
                    img: `assets/images/partners/postman.webp`
,link:  `https://www.postman.com/`
                },
                {
                    img: `assets/images/partners/Doli.webp`
,link:  `https://www.dolibarr.org/` 
                },
                {
                    img: `assets/images/partners/php.webp`
,link:  `https://www.jetbrains.com/phpstorm/`
                }
            ]
        }
    ]

    partnerContentTop = [
        {
            list: [
                {
                    img: `assets/images/partners/code-stable.webp`
,link:  `https://code.visualstudio.com/`
                },
                {
                    img: `assets/images/partners/R.webp`
,link:  `https://lp.jetbrains.com/intellij-idea-promo/`
                },
                {
                    img: `assets/images/partners/eclipse.webp`
,link:  `https://eclipseide.org/`
                },
                {
                    img: `assets/images/partners/sql.webp`
,link:  `https://www.mysql.com/products/workbench/`
                },
                {
                    img: `assets/images/partners/postman.webp`
,link:  `https://www.postman.com/`
                },
                {
                    img: `assets/images/partners/Doli.webp`
,link:  `https://www.dolibarr.org/` 
                },
                {
                    img: `assets/images/partners/php.webp`
,link:  `https://www.jetbrains.com/phpstorm/`
                }
            ]
        }
    ]

    partnerContent = [
        {
            list: [
                {
                    img: `assets/images/partners/code-stable.webp`
,link:  `https://code.visualstudio.com/`
                },
                {
                    img: `assets/images/partners/R.webp`
,link:  `https://lp.jetbrains.com/intellij-idea-promo/`
                },
                {
                    img: `assets/images/partners/eclipse.webp`
,link:  `https://eclipseide.org/`
                },
                {
                    img: `assets/images/partners/sql.webp`
,link:  `https://www.mysql.com/products/workbench/`
                },
                {
                    img: `assets/images/partners/postman.webp`
,link:  `https://www.postman.com/`
                },
                {
                    img: `assets/images/partners/Doli.webp`
,link:  `https://www.dolibarr.org/` 
                },
                {
                    img: `assets/images/partners/php.webp`
,link:  `https://www.jetbrains.com/phpstorm/`
                }
            ]
        }
    ]
    
    chunk(arr: any[], chunkSize: number): any[][] {
        const R = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
          R.push(arr.slice(i, i + chunkSize));
        }
        return R;
      }

    goToSite(link:string){
        window.open(link)
    }

}