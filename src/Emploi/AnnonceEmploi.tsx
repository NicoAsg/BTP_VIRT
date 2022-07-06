import React, { useEffect } from "react"
import { header_dark } from "../utils/header_dark"

interface EmployeurData {
    nom: string
    location: string
    description: string
}

interface OffreData {
    employeur: EmployeurData

    nom: string
    description: string

    competences: string[]

    horaires: string[]
    remuneration: string


}

const AnnonceEmploi = (): JSX.Element => {
    useEffect(() => {
        header_dark()
    })

    let data: OffreData = {
        employeur: {
            nom: "Nom de l'employeur",
            location: "Paris 15 75015",
            description: "Description de l’employeur : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat vivamus at augue eget arcu dictum varius duis at. Fermentum odio eu feugiat pretium nibh ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
        },

        nom: "Intitulé de l'offre",
        description: "Déscription de l’offre : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat vivamus at augue eget arcu dictum varius duis at. Fermentum odio eu feugiat pretium nibh ipsum. A iaculis at erat pellentesque adipiscing commodo. Placerat orci nulla pellentesque dignissim. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Pretium fusce id velit ut tortor pretium viverra. Adipiscing diam donec adipiscing tristique risus.",

        competences: [
            "Permis X requis",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Feugiat vivamus at augue eget arcu dictum varius duis at. ",
            "Fermentum odio eu feugiat pretium nibh ipsum.",
            "A iaculis at erat pellentesque adipiscing commodo. Placerat orci nulla pellentesque dignissim. ",
            "Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Pretium fusce id velit ut tortor pretium viverra. Adipiscing diam donec adipiscing tristique risus.",
        ],

        horaires: [
            "Lundi - Jeudi : 7h - 15h",
            "Vendredi : 6h - 14h"
        ],
        remuneration: "15 € par heure"
    }

    let competences: JSX.Element[] = []
    data.competences.forEach((competence, index) => {
        competences.push(
            <li key={ index }>{ competence }</li>
        )
    })

    let horaires : JSX.Element[] = []
    data.horaires.forEach((horaire, index) => {
        horaires.push(
            <span key={ index }>{ horaire }</span>
        )
    })

    return (
        <div id="annonce_emploi">
            <div id="employeur_infos">
                <div id="profile">
                    <img src="/icon_ui_profile.png" alt="Photo profile" />
                    <div>
                        <h3>Employeur</h3>
                        <span>{ data.employeur.nom }</span>
                        <span>{ data.employeur.location }</span>
                    </div>
                </div>
                <hr />
                <div id="description">{ data.employeur.description }</div>
            </div>
            <div id="main">
                <div id="left">
                    <div id="descrition">
                        <h2>{ data.nom }</h2>
                        <p>{ data.description }</p>
                    </div>
                    <hr />
                    <div id="competences">
                        <h3>Compétences requises</h3>
                        <ul>
                            { competences }
                        </ul>
                    </div>
                    <hr />
                    <div id="reste">
                        <div id="horaires">
                            <h3>Horaires</h3>
                            { horaires }
                        </div>
                        <div id="remuneration">
                            <h3>Rémunération</h3>
                            { data.remuneration }
                        </div>
                    </div>
                </div>
                <div id="right">
                    <button>Postuler</button>
                    <div id="publicite">
                        <img src="/btp_virt_logo_gray.png" alt="Publicité" />
                        <span>Publicité</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnnonceEmploi