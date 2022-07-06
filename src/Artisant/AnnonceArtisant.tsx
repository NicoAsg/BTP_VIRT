import React, { useEffect } from "react"
import ReverseImagesCarousel from "../Annonce/ReverseImagesCarousel"
import { header_dark } from "../utils/header_dark"
import "./annonce_artisant.css"

interface ArtisantData {
    nom: string
    metier: string
    location: string

    inscrit: string
    note: number
    avis: number

    description: string

    tarifs: string[]

    realisations: RealisationsData[]
}

interface RealisationsData {
    photo: string
    description: string
}

const AnnonceArtisant = (): JSX.Element => {
    useEffect(() => {
        header_dark()
    })

    let data: ArtisantData = {
        nom: "Nom de l'artisant",
        metier: "Intitulé métier",
        location: "Ile-de-France",
        
        inscrit: "Février 2022",
        note: 3.2,
        avis: 31,

        description: "Description de l’artisant : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat vivamus at augue eget arcu dictum varius duis at. Fermentum odio eu feugiat pretium nibh ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

        tarifs: [
            "100 € par m²",
            "100 € par m²",
            "100 € par m²",
            "100 € par m²"
        ],

        realisations: [
            {
                photo: "/icon_ui_picture.png",
                description: "Description de la réalisation : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat vivamus at augue eget arcu dictum varius duis at. Fermentum odio eu feugiat pretium nibh ipsum. A iaculis at erat pellentesque adipiscing commodo. Placerat orci nulla pellentesque dignissim. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Pretium fusce id velit ut tortor pretium viverra."
            },
            {
                photo: "/icon_ui_picture.png",
                description: "Description de la réalisation : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat vivamus at augue eget arcu dictum varius duis at. Fermentum odio eu feugiat pretium nibh ipsum. A iaculis at erat pellentesque adipiscing commodo. Placerat orci nulla pellentesque dignissim. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Pretium fusce id velit ut tortor pretium viverra."
            },
            {
                photo: "/icon_ui_picture.png",
                description: "Description de la réalisation : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat vivamus at augue eget arcu dictum varius duis at. Fermentum odio eu feugiat pretium nibh ipsum. A iaculis at erat pellentesque adipiscing commodo. Placerat orci nulla pellentesque dignissim. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Pretium fusce id velit ut tortor pretium viverra."
            },
            {
                photo: "/icon_ui_picture.png",
                description: "Description de la réalisation : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat vivamus at augue eget arcu dictum varius duis at. Fermentum odio eu feugiat pretium nibh ipsum. A iaculis at erat pellentesque adipiscing commodo. Placerat orci nulla pellentesque dignissim. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Pretium fusce id velit ut tortor pretium viverra."
            }
        ]
    }

    let stars: JSX.Element[] = []
    for (let i = 0; i < 5; i++) {
        if (i < data.note)
            stars.push(
                <img src="/search/icon_ui_star_full.png" alt="Note" className="star" key={ i } />
            )
        else
            stars.push(
                <img src="/search/icon_ui_star_empty.png" alt="Note" className="star" key={ i } />
            )
    }

    let tarifs: JSX.Element[] = []
    for (let i = 0; i < data.tarifs.length; i++) {
        tarifs.push(
            <span key={ i }>Tarifs { i } : { data.tarifs[i] }</span>
        )
    }

    let linksPhotoRealisations: string[] = []
    for (let realisation of data.realisations)
        linksPhotoRealisations.push(realisation.photo)

    return (
        <div id="annonce_artisant">
            <div id="artisant_infos">
                <div id="infos_main">
                    <img src="/icon_ui_profile.png" alt="Photo profile" />
                    <div>
                        <h3>Artisant</h3>
                        <div>
                            <div>
                                <span>{ data.nom }</span>
                                <span className="op-80">{ data.metier }</span>
                                <span className="op-80">{ data.location }</span>
                            </div>
                            <div>
                                <span>Inscrit depuis { data.inscrit }</span>
                                <div>
                                    <span id="rating">Avis vérifiés : { data.note }</span>
                                    { stars }
                                    <span id="avis">{ data.avis } avis vérifiés</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div id="description">
                    <span>{ data.description }</span>
                </div>
                <button>Contacter</button>
            </div>
            <div id="main">
                <div id="left">
                    <div id="tarifs">
                        <h3>Tarifs</h3>
                        <div>
                            { tarifs }
                        </div>
                    </div>
                    <hr />
                    <div id="realisation">
                        <h3>Réalisations</h3>
                        <ReverseImagesCarousel links={ linksPhotoRealisations }></ReverseImagesCarousel>
                        <span>{ data.realisations[0].description }</span>
                    </div>
                    <hr />
                    <div id="vendeur_short">
                        <div id="infos_vendeur">
                            <img src="/icon_ui_profile.png" alt="Photo profile" />
                            <div>
                                <span>{ data.nom }</span>
                                <span>{ data.metier }</span>
                                <span>{ data.location }</span>
                            </div>
                            <button>Contacter</button>
                        </div>
                    </div>
                </div>
                <div id="right" className="publicite">
                    <img src="/btp_virt_logo_gray.png" alt="Publicité" />
                    <span>Publicité</span>
                </div>
            </div>
        </div>
    )
}

export default AnnonceArtisant