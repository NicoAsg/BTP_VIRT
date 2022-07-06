import React from 'react'
import { SearchData } from '../SearchPageSample/interfaces/SearchData'
import SearchPageSample from '../SearchPageSample/SearchPageSample'
import "./annonce_emploi.css"

const Emploi = (): JSX.Element => {
    let data: SearchData = {
        id: "emploi",
        title: "Offres d'emploi BTP",

        buttonAdd: "Poster une offre d'emploi",
        
        search: {
            types: ["CDI", "CDD", "Extra"],
            placeholder: "Rechercher une annonce",
            categories: [""]
        },
        
        annoncesTitle: "Toutes les offres d'emploi",
        annonces: [
            {
                type: "CDI",

                link: "/emploi/annonce",
                
                img: "/search/icon_ui_picture.png",
                title: "Intitulé de l'emploi'",
                pro: false,

                prix: 2000,
                refPrix: "/ mois",

                description: "Description de l’emploi, Lorem ipsum dolor sit amet, consectetur...",
                location: "Paris 15e 75015",

                note: undefined,
                avis: undefined
            },
            {
                type: "CDD",

                link: "/emploi/annonce",
                
                img: "/search/icon_ui_picture.png",
                title: "Intitulé de l'emploi'",
                pro: false,

                prix: 20,
                refPrix: "/ heure",

                description: "Description de l’emploi, Lorem ipsum dolor sit amet, consectetur...",
                location: "Créteil 94000",

                note: undefined,
                avis: undefined
            },
            {
                type: "Extra",

                link: "/emploi/annonce",
                
                img: "/search/icon_ui_picture.png",
                title: "Intitulé de l'emploi'",
                pro: false,

                prix: 100,
                refPrix: "/ jour",

                description: "Description de l’emploi, Lorem ipsum dolor sit amet, consectetur...",
                location: "Bobigny 93000",

                note: undefined,
                avis: undefined
            }
        ],
    }
    return (
        <SearchPageSample data={ data } />
    )
}

export default Emploi