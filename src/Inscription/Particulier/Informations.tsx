import React from "react"
import { useNavigate } from "react-router-dom"

import { checkInputs } from '../checkInputs'

const Informations = (): JSX.Element => {
    return (
        <div className="inscription" id="informations">
            <h1>Informations</h1>

            <p>Complétez vos information pour finaliser la création de votre compte</p>

            <div id="infos">
                <input type="text" name="nom" placeholder="Nom" required />
                <input type="text" name="prénom" placeholder="Prénom" required />
                <input type="text" name="adresse" placeholder="Adresse" required />
                <input type="text" name="telephone" placeholder="Téléphone" required />
            </div>
            
            <button onClick={ () => {
                if (checkInputs()) 
                    window.location.href = "/compte"
            } }>Terminer</button>
        </div>
    )
}

export default Informations