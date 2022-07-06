import React from 'react'
import { SearchData } from '../SearchPageSample/interfaces/SearchData'
import SearchPageSample from '../SearchPageSample/SearchPageSample'
import "../SearchPageSample/search_page.css"

const Materiel = (): JSX.Element => {
    let data: SearchData = {
        id: "materiel",
        title: "Annonces de matériel BTP",

        buttonAdd: "Déposer une annonce",
        
        search: {
            types: ["Location", "Achat"],
            placeholder: "Rechercher une annonce",
            categories: [""]
        },
        
        annoncesTitle: "Toutes les annonces",
        annonces: [
            {
                type: "Location",

                link: "/materiel/annonce",
                
                img: "/search/icon_ui_picture.png",
                title: "Titre de l'annonce",
                pro: false,

                prix: 100,
                refPrix: "/ jour",

                description: "Description de l’annonce, Lorem ipsum dolor sit amet, consectetur...",
                location: "Paris 15e 75015",

                note: undefined,
                avis: undefined
            },
            {
                type: "Location",

                link: "/materiel/annonce",
                
                img: "/search/icon_ui_picture.png",
                title: "Titre de l'annonce",
                pro: true,

                prix: 100,
                refPrix: "/ heure",

                description: "Description de l’annonce, Lorem ipsum dolor sit amet, consectetur...",
                location: "Créteil 94000",

                note: undefined,
                avis: undefined
            },
            {
                type: "Achat",

                link: "/materiel/annonce",
                
                img: "/search/icon_ui_picture.png",
                title: "Titre de l'annonce",
                pro: false,

                prix: 50,
                refPrix: "",

                description: "Description de l’annonce, Lorem ipsum dolor sit amet, consectetur...",
                location: "Bobigny 93000",

                note: undefined,
                avis: undefined
            },
            {
                type: "Achat",

                link: "/materiel/annonce",
                
                img: "/search/icon_ui_picture.png",
                title: "Titre de l'annonce",
                pro: false,

                prix: 1000,
                refPrix: "",

                description: "Description de l’annonce, Lorem ipsum dolor sit amet, consectetur...",
                location: "Versailles 78000",

                note: undefined,
                avis: undefined
            }
        ],
    }
    return (
        <SearchPageSample data={ data } />
    )
}

export default Materiel
