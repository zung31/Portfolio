import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-partner',
    templateUrl: './partner.component.html',
    styleUrls: ['./partner.component.scss']
})
export class PartnerComponent implements OnInit {

    @Input() title? : string; // decorate the property with @Input()
    constructor(
        public router: Router
    ) { }

    ngOnInit(): void {}

    ngAfterViewInit(): void {
      this.observeCategories();
    }

    observeCategories() {
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

    partnerContentBottom = [
        {
            list: [
                {
                    img: `assets/images/partners/code-stable.png`
,link:  `https://code.visualstudio.com/`
                },
                {
                    img: `assets/images/partners/R.png`
,link:  `https://lp.jetbrains.com/intellij-idea-promo/`
                },
                {
                    img: `assets/images/partners/eclipse.png`
,link:  `https://eclipseide.org/`
                },
                {
                    img: `assets/images/partners/sql.png`
,link:  `https://www.mysql.com/products/workbench/`
                },
                {
                    img: `assets/images/partners/postman.png`
,link:  `https://www.postman.com/`
                },
                {
                    img: `assets/images/partners/Doli.png`
,link:  `https://www.dolibarr.org/` 
                },
                {
                    img: `assets/images/partners/php.png`
,link:  `https://www.jetbrains.com/phpstorm/`
                }
            ]
        }
    ]

    partnerContentTop = [
        {
            list: [
                {
                    img: `assets/images/partners/code-stable.png`
,link:  `https://code.visualstudio.com/`
                },
                {
                    img: `assets/images/partners/R.png`
,link:  `https://lp.jetbrains.com/intellij-idea-promo/`
                },
                {
                    img: `assets/images/partners/eclipse.png`
,link:  `https://eclipseide.org/`
                },
                {
                    img: `assets/images/partners/sql.png`
,link:  `https://www.mysql.com/products/workbench/`
                },
                {
                    img: `assets/images/partners/postman.png`
,link:  `https://www.postman.com/`
                },
                {
                    img: `assets/images/partners/Doli.png`
,link:  `https://www.dolibarr.org/` 
                },
                {
                    img: `assets/images/partners/php.png`
,link:  `https://www.jetbrains.com/phpstorm/`
                }
            ]
        }
    ]

    partnerContent = [
        {
            list: [
                {
                    img: `assets/images/partners/code-stable.png`
,link:  `https://code.visualstudio.com/`
                },
                {
                    img: `assets/images/partners/R.png`
,link:  `https://lp.jetbrains.com/intellij-idea-promo/`
                },
                {
                    img: `assets/images/partners/eclipse.png`
,link:  `https://eclipseide.org/`
                },
                {
                    img: `assets/images/partners/sql.png`
,link:  `https://www.mysql.com/products/workbench/`
                },
                {
                    img: `assets/images/partners/postman.png`
,link:  `https://www.postman.com/`
                },
                {
                    img: `assets/images/partners/Doli.png`
,link:  `https://www.dolibarr.org/` 
                },
                {
                    img: `assets/images/partners/php.png`
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