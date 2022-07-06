import React, { useEffect } from 'react'
import AnnoncesCarousel from '../Annonce/AnnoncesCarousel'
import ImagesCarousel from '../Annonce/ImagesCarousel'
import { header_dark } from '../utils/header_dark'
import './annonce_materiel.css'

interface VendeurData {
    nom: string
    nb_annonces: number
    annonces: AnnonceData[]
}

interface AnnonceData {
    vendeur: VendeurData | undefined
    
    titre: string
    type: string
    images: string[]
    prix: number
    refPrix: string | undefined
    location: string
    description: string
}

const AnnonceMateriel = (): JSX.Element => {
    class Scroll {
        static last: number = 130
    }
    const scrollSide = () => {
        let side = document.getElementById("side")
        if (!side) return

        if (window.scrollY <= 130) {
            side.style.marginTop = "0"
            return
        }
        console.log(window.screen.height)

        if ((document.getElementsByClassName("publicite")[0] as HTMLDivElement).offsetHeight >= window.screen.height) return

        side.style.marginTop = (parseInt(side.style.marginTop) + window.scrollY - Scroll.last).toString() + "px"

        Scroll.last = window.scrollY

        console.log(Scroll.last)
        
    }

    useEffect(() => {
        header_dark()

        let side = document.getElementById("side")
        if (side) side.style.marginTop = "0px"

        window.addEventListener('scroll', scrollSide)
    })

    const data: AnnonceData = {
        vendeur: {
            nom: "Nom du vendeur",
            nb_annonces: 2,
            annonces: [
                {
                    vendeur: undefined,
                    titre: "Titre de l'annonce",
                    type: "",
                    images: ["/icon_ui_picture.png"],
                    prix: 0,
                    refPrix: "",
                    location: "",
                    description: ""
                },
                {
                    vendeur: undefined,
                    titre: "Titre de l'annonce",
                    type: "",
                    images: ["/icon_ui_picture.png"],
                    prix: 0,
                    refPrix: "",
                    location: "",
                    description: ""
                }
            ]
        }, 

        titre: "Titre de l'annonce",
        type: "Achat",
        images: ["/icon_ui_picture.png", "/icon_ui_picture.png", "/icon_ui_picture.png", "/icon_ui_picture.png"],
        prix: 100,
        refPrix: undefined,
        location: "Paris 15 75015",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
    }
    
    if (!data.vendeur) return <div></div>

    return (
        <div id="annonce_materiel">
            <div id="main">
                <ImagesCarousel links={ data.images } type={ data.type } />
                <div className="infos_annonce">
                    <div id="left">
                        <h1>{ data.titre }</h1>
                        <span>{ data.prix } € { data.refPrix ? data.refPrix : "" }</span>
                        <span id="location">{ data.location }</span>
                    </div>
                    <div id="right">
                        <img src="/annonce/icon_ui_share.png" alt="Partager" />
                    </div>
                </div>
                <hr />
                <div id="decription">
                    <h2>Description</h2>
                    { data.description }
                </div>
                <hr />
                <div id="vendeur">
                    <div id="infos_vendeur">
                        <img src="/icon_ui_profile.png" alt="Photo profile" />
                        <div>
                            <span>{ data.vendeur ? data.vendeur.nom : "" }</span>
                            <span className="nombre_annonces">{ data.vendeur.nb_annonces } annonces</span>
                        </div>
                        <button>Contacter</button>
                    </div>
                    <div id="annonces_vendeur">
                        <span>Annonces de la même personne</span>
                        <AnnoncesCarousel data={ data.vendeur.annonces }/>
                    </div>
                </div>
                <div id="similaire">
                    
                </div>
            </div>
            <div id="side">
                <div id="vendeur_short">
                    <h3>Annonce postée par</h3>
                    <div id="infos_vendeur">
                        <img src="/icon_ui_profile.png" alt="Photo profile" />
                        <div>
                            <span>{ data.vendeur.nom }</span>
                            <span className="nombre_annonces">{ data.vendeur.nb_annonces } annonces</span>
                        </div>
                    </div>
                    <button>Contacter</button>
                </div>
                <div className="publicite">
                    <img src="/btp_virt_logo_gray.png" alt="Logo Pub" />
                    <span>Publicité</span>
                </div>
            </div>
        </div>
    )
}

export default AnnonceMateriel