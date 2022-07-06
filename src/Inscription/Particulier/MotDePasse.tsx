import React, { useState } from "react"
import { checkInputs } from "../checkInputs"
import Informations from "./Informations"

const MotDePasse = (): JSX.Element => {
    let [page, setPage] = useState<JSX.Element>(
        <div className="inscription" id="mot_de_passe">
            <h1>Mot de passe</h1>

            <p>Votre mot de passe sera requis pour vous connecter</p>

            <input type="password" name="mot_de_passe" 
                placeholder="Mot de passe"
                pattern="(?=.*\d)(?=.*[\W_]).{7,}"
                title="Minimum of 7 characters. Should have at least one special character and one number."
            />

            <button onClick={ () => {
                if (checkInputs())
                    setPage(<Informations />) 
            } }>Valider</button>
            
        </div>
    )

    return page
}

export default MotDePasse