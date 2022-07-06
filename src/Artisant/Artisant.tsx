import React from 'react'
import { SearchData } from '../SearchPageSample/interfaces/SearchData'
import SearchPageSample from '../SearchPageSample/SearchPageSample'

const Artisant = (): JSX.Element => {
    let data: SearchData = {
        id: "artisant",
        title: "Artisants du BTP",

        buttonAdd: "Proposer ses services",
        
        search: {
            types: ["Construction", "Travaux"],
            placeholder: "Rechercher une annonce",
            categories: [""]
        },
        
        annoncesTitle: "Tous les artisants",
        annonces: [
            {
                type: "Tout",

                link: "/artisant/annonce",
                
                img: "/search/icon_ui_picture.png",
                title: "Intitulé de l'artisant",
                pro: false,

                prix: undefined,
                refPrix: undefined,

                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
                location: "Paris 75",

                note: 4,
                avis: 16
            },
            {
                type: "Travaux",

                link: "/artisant/annonce",
                
                img: "/search/icon_ui_picture.png",
                title: "Intitulé de l'artisant",
                pro: false,

                prix: undefined,
                refPrix: undefined,

                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
                location: "Paris 75",

                note: 4,
                avis: 16
            },
            {
                type: "Construction",

                link: "/artisant/annonce",
                
                img: "/search/icon_ui_picture.png",
                title: "Intitulé de l'artisant",
                pro: true,

                prix: undefined,
                refPrix: undefined,

                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
                location: "Paris 75",

                note: 4,
                avis: 16
            }
        ],
    }
    return (
        <SearchPageSample data={ data } />
    )
}

export default Artisant