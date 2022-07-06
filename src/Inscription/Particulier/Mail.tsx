import React, { useState }from "react"
import { checkInputs } from "../checkInputs"
import "./particulier.css"
import VerificationMail from "./VerificationMail"

const Mail = (): JSX.Element => {
    let [page, setPage] = useState<JSX.Element>(
        <div id="mail" className="inscription">
            <h1>Adresse mail</h1>
            
            <p>Votre adresse mail vous servira d’identifiant pour vous connecter.</p>
            <input type="text" name="adresse_mail" placeholder="Adresse mail" required />

            <button onClick={ () => {
                if (checkInputs())
                    setPage(<VerificationMail />) 
            } }>Valider</button>
        </div>
    )

    return page
}

export default Mail