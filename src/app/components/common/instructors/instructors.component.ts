import { Component } from '@angular/core';

@Component({
    selector: 'app-instructors',
    templateUrl: './instructors.component.html',
    styleUrls: ['./instructors.component.scss']
})
export class InstructorsComponent {

    sectionTitle = [
        {
            subTitle: `Équipe`,
            title: `Course Instructors`,
            paragraph: `Nous sommes heureux et fiers de vous annoncer que notre association est officiellement reconnue d’INTÉRÊT GÉNÉRAL ! 

            Une belle reconnaissance des actions que nous menons depuis 40 ans en faveur de la diffusion de la LSF et de l’intégration des Sourds au sein de notre société ! 

            Ce nouveaux statut implique également que les personnes qui souhaitent nous faire des dons peuvent bénéficier d’une réduction d’impôts !`
        }
    ]
    instructorBox = [
        {
            image: `assets/images/instructors/Laure.jpeg`,
            name: `Laure ARNAL`,
            designation: `Directrice`,
            link: `/instructor-profile`,
            socials: [
                {
                    icon: `bx bxl-facebook`,
                    link: `https://www.facebook.com/`
                },
                {
                    icon: `bx bxl-linkedin`,
                    link: `https://linkedin.com/`
                },
                {
                    icon: `bx bxl-twitter`,
                    link: `https://twitter.com/`
                },
                {
                    icon: `bx bxl-instagram`,
                    link: `https://www.instagram.com/`
                }
            ]
        },
        {
            image: `assets/images/instructors/Florence.jpeg`,
            name: `Florence GUEGUEN`,
            designation: `Formatrice LSF qualifiée Responsable pédagogique`,
            link: `/instructor-profile`,
            socials: [
                {
                    icon: `bx bxl-facebook`,
                    link: `https://www.facebook.com/`
                },
                {
                    icon: `bx bxl-linkedin`,
                    link: `https://linkedin.com/`
                },
                {
                    icon: `bx bxl-twitter`,
                    link: `https://twitter.com/`
                },
                {
                    icon: `bx bxl-instagram`,
                    link: `https://www.instagram.com/`
                }
            ]
        },
        {
            image: `assets/images/instructors/Anthony.jpeg`,
            name: `Anthony BERARD`,
            designation: `Formateur LSF qualifié Référent handicap`,
            link: `/instructor-profile`,
            socials: [
                {
                    icon: `bx bxl-facebook`,
                    link: `https://www.facebook.com/`
                },
                {
                    icon: `bx bxl-linkedin`,
                    link: `https://linkedin.com/`
                },
                {
                    icon: `bx bxl-twitter`,
                    link: `https://twitter.com/`
                },
                {
                    icon: `bx bxl-instagram`,
                    link: `https://www.instagram.com/`
                }
            ]
        },
        {
            image: `assets/images/instructors/Anne-Marie.jpg`,
            name: `Anne-Marie DEROZIER`,
            designation: `Formatrice LSF qualifiée`,
            link: `/instructor-profile`,
            socials: [
                {
                    icon: `bx bxl-facebook`,
                    link: `https://www.facebook.com/`
                },
                {
                    icon: `bx bxl-linkedin`,
                    link: `https://linkedin.com/`
                },
                {
                    icon: `bx bxl-twitter`,
                    link: `https://twitter.com/`
                },
                {
                    icon: `bx bxl-instagram`,
                    link: `https://www.instagram.com/`
                }
            ]
        },
        {
            image: `assets/images/instructors/Amal.jpeg`,
            name: `Amal MOHAMED`,
            designation: `Secrétaire
Organisation et communication`,
            link: `/instructor-profile`,
            socials: [
                {
                    icon: `bx bxl-facebook`,
                    link: `https://www.facebook.com/`
                },
                {
                    icon: `bx bxl-linkedin`,
                    link: `https://linkedin.com/`
                },
                {
                    icon: `bx bxl-twitter`,
                    link: `https://twitter.com/`
                },
                {
                    icon: `bx bxl-instagram`,
                    link: `https://www.instagram.com/`
                }
            ]
        },
    ]

}