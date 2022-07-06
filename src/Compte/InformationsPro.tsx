import React from "react"
import { dataComptePro } from "./interface/dataComptePro"

const InformationsPro = ({ data }: { data: dataComptePro }): JSX.Element => {
    const mdp = (len: number, acc = ""): string => {
        if (len != 0) {
            acc += "*"
            return mdp(len - 1, acc)
        }
        return acc
    }

    return (
        <div id="compte_infos">
            <div id="profile">
                <div id="photo">
                    <img src="/compte/icon_ui_pencil.png" alt="Modifier" id="crayon_modifier" />
                    <img src={ data.photo } alt="Photo du compte" id="photo" />
                </div>
                <div id="info">
                    <p id="nom">{ data.nom } { data.prenom }</p>
                    <p id="entreprise">{ data.nomEntreprise }</p>
                </div>
            </div>

            <hr />

            <div id="entreprise">
                <h3>Entreprise</h3>
                <p>{ data.nomEntreprise }</p>
                <div id="infos">
                    <div id="adresse">
                        <img src="/compte/icon_ui_location.png" alt="Adresse" />
                        <span>{ data.adresseEntreprise }</span>
                    </div>
                    <div id="tel">
                        <img src="icon_ui_phone.png" alt="Téléphone" />
                        <span>{ data.numeroEntreprise }</span>
                    </div>
                </div>
            </div>

            <hr />

            <div id="compte">
                <h3>Compte</h3>
                <p>Adresse mail : { data.mail }</p>
                <p>Mot de passe : { mdp(data.lenMdp) }</p>
            </div>
        </div>
    )
}

export default InformationsPro