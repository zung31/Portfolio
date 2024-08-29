import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-partner',
    templateUrl: './partner.component.html',
    styleUrls: ['./partner.component.scss']
})
export class PartnerComponent {

    @Input() title? : string; // decorate the property with @Input()
    constructor(
        public router: Router
    ) { }

    partnerContentBottom = [
        {
            list: [
                {
                    img: `assets/images/partners/ap.png`
,link:  `https://mdph.departement06.fr/mdph-06-7374.html `
                },
                {
                    img: `assets/images/partners/paca.png`
,link:  `https://www.maregionsud.fr/ `
                },
                {
                    img: `assets/images/partners/compteformation.png`
,link:  `https://www.moncompteformation.gouv.fr/espace-prive/html/#/ `
                },
                {
                    img: `assets/images/partners/mucem.jpeg`
,link:  `https://www.mucem.org/ `
                },
                {
                    img: `assets/images/partners/marseille.png`
,link:  `https://www.marseille.fr/ `
                },
                {
                    img: `assets/images/partners/qualiopi.png`
,link:`https://travail-emploi.gouv.fr/formation-professionnelle/acteurs-cadre-et-qualite-de-la-formation-professionnelle/article/qualiopi-marque-de-certification-qualite-des-prestataires-de-formation `
                },
                {
                    img: `assets/images/partners/dcl.png`
,link:  `https://www.education.gouv.fr/le-diplome-de-competence-en-langue-dcl-2978 `
                }
            ]
        }
    ]

    partnerContentTop = [
        {
            list: [
                {
                    img: `assets/images/partners/agefiph.jpeg`
,link:  `https://www.agefiph.fr/`
                },
                {
                    img: `assets/images/partners/datadock.png`
,link:  `https://www.data-dock.fr/ `
                },
                {
                    img: `assets/images/partners/mdph.jpeg`
,link:  `http://www.mdph13.fr/ `
                },
                {
                    img: `assets/images/partners/rrh.png`
,link:  `https://www.agefiph.fr/aides-handicap/reseau-des-referents-handicap-rrh `
                },
                {
                    img: `assets/images/partners/pe.png`
,link:  `https://www.moncompteformation.gouv.fr/espace-prive/html/#/ `
                },
                {
                    img: `assets/images/partners/cpf.png`
,link:  `https://www.pole-emploi.fr/accueil/ `
                },
                {
                    img: `assets/images/partners/dbr.jpeg`
,link:  `https://www.departement13.fr/ `
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