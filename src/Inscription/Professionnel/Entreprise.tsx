import React, { useState } from 'react'
import { checkInputs } from '../checkInputs'
import Compte from './Compte'
import { DataEntreprise } from '../interface/dataEntreprise'

const Entreprise = (): JSX.Element => {
    let [page, setPage] = useState<JSX.Element>(
        <div className="inscription" id="entreprise">
            <h1>Entreprise</h1>

            <p>Afin de créer un compte professionnel, complétez les informations de votre entreprise</p>

            <div id="infos">
                <input type="text" name="nom_entreprise" placeholder="Nom de l'entreprise" required />
                <input type="text" name="siret" placeholder="SIRET" required />
                <input type="text" name="adresse" placeholder="Adresse" required />
                <input type="text" name="telephone" placeholder="Téléphone" required />
            </div>

            <button onClick={ () => {
                if (checkInputs()) {
                    let data: DataEntreprise = {
                        nomEntreprise : (document.getElementsByName("nom_entreprise")[0] as HTMLInputElement).value,
                        siret: (document.getElementsByName("siret")[0] as HTMLInputElement).value,
                        adresseEntreprise: (document.getElementsByName("adresse")[0] as HTMLInputElement).value,
                        tel: (document.getElementsByName("telephone")[0] as HTMLInputElement).value,

                        nomCompte: undefined,
                        prenom:  undefined,
                        mail: undefined,
                        mdp: undefined 
                    }
                    setPage(<Compte dataCompte={ data } />) 
                }
            } }>Valider</button>
        </div>
    )

    return page
}

export default Entreprise