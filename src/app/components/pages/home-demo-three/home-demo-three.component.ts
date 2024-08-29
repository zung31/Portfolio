import { Component } from '@angular/core';

@Component({
  selector: 'app-home-demo-three',
  templateUrl: './home-demo-three.component.html',
  styleUrls: ['./home-demo-three.component.scss']
})
export class HomeDemoThreeComponent {

  feedbackBox = [
    // {
    //     userImg: `assets/images/users/user1.jpg`,
    //     userName: `Garance Versaille`,
    //     userDesignation: `Designer`,
    //     description: `“Formation géniale, enrichissante et bien construite.
    //         Formateurs et formatrices patients, ouverts, très pédagogues.
    //         Toute l’équipe est sourde (sauf la secrétaire) on est directement dans le bain, on apprend plus vite.
    //         Découvrir cette culture est une opportunité à ne pas laisser passer.
    //         Je recommande !
    //         .”`,
    //     rating: [
    //         {
    //             icon: `bx bxs-star`
    //         },
    //         {
    //             icon: `bx bxs-star`
    //         },
    //         {
    //             icon: `bx bxs-star`
    //         },
    //         {
    //             icon: `bx bxs-star`
    //         },
    //         {
    //             icon: `bx bxs-star`
    //         }
    //     ]
    // },
    {
        userImg: `assets/images/users/pp.png`,
        userName: `Pauline Poidevin`,
        userDesignation: `Developer`,
        description: `“Deux semaines de formation VIS qui a été très enrichissant ! Une équipe au top ! Je recommande aussi cette endroit pour apprendre la langue des signes!”`,
        rating: [
            {
                icon: `bx bxs-star`
            },
            {
                icon: `bx bxs-star`
            },
            {
                icon: `bx bxs-star`
            },
            {
                icon: `bx bxs-star`
            },
            {
                icon: `bx bxs-star`
            }
        ]
    },
    {
        userImg: `assets/images/users/cb.png`,
        userName: `Chloé B`,
        userDesignation: `Developer`,
        description: `“Super formation, des formateurs à l'écoute et professionnels. Des exercices diversifiés, possibilité de tarif étudiant ce qui est vraiment pratique!”`,
        rating: [
            {
                icon: `bx bxs-star`
            },
            {
                icon: `bx bxs-star`
            },
            {
                icon: `bx bxs-star`
            },
            {
                icon: `bx bxs-star`
            },
            {
                icon: `bx bxs-star`
            }
        ]
    },
    {
        userImg: `assets/images/users/ls.png`,
        userName: `Lola Snail`,
        userDesignation: `Developer`,
        description: `“J’ai suivi la formation LSF de A1 jusqu’à B2 à LSF med, une équipe au top, dynamique, pédagogue, à l’écoute, le tout dans une ambiance aussi chaleureuse que professionnelle. Merci pour tout🐍”`,
        rating: [
            {
                icon: `bx bxs-star`
            },
            {
                icon: `bx bxs-star`
            },
            {
                icon: `bx bxs-star`
            },
            {
                icon: `bx bxs-star`
            },
            {
                icon: `bx bxs-star`
            }
        ]
    }
]

}
