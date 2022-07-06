import React, { useState } from 'react'
import { checkInputs } from '../checkInputs'
import VerificationMail from './VerificationMail'
import { DataEntreprise } from '../interface/dataEntreprise'

const Compte = ({ dataCompte }: { dataCompte: DataEntreprise }): JSX.Element => {
    let [page, setPage] = useState<JSX.Element>(
        <div className="inscription" id="compte">
            <h1>Compte</h1>

            <p>Complétez les informations du gérant du compte</p>

            <div id="infos">
                <input type="text" name="nom" placeholder="Nom" required />
                <input type="text" name="prenom" placeholder="Prénom" required />
                <input type="text" name="mail" placeholder="Adresse mail" required />
                <input type="text" name="mdp" placeholder="Mot de passe" required />
            </div>

            <button onClick={ () => {
                if (checkInputs()) {
                    dataCompte.nomCompte = (document.getElementsByName("nom")[0] as HTMLInputElement).value
                    dataCompte.prenom = (document.getElementsByName("prenom")[0] as HTMLInputElement).value
                    dataCompte.mail = (document.getElementsByName("mail")[0] as HTMLInputElement).value
                    dataCompte.mdp = (document.getElementsByName("mdp")[0] as HTMLInputElement).value
                    setPage(<VerificationMail dataCompte={ dataCompte }/>) 
                }
            } }>Valider</button>
        </div>
    )
    
    return page
}

export default Compte