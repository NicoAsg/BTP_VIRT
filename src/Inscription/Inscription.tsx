import React, { useEffect, useState } from 'react'
import { header_dark } from '../utils/header_dark'
import "./inscription.css"
import Mail from './Particulier/Mail'
import Entreprise from './Professionnel/Entreprise'

const Inscription = (): JSX.Element => {
    useEffect(() =>  {
        header_dark()
    })

    let [ page, setPage ] = useState<JSX.Element>(
        <div className="inscription">
            <h1>Création d'un compte</h1>
            <p>Afin de pouvoir profiter de toutes les fonctionnalités du site, vous devez créer un compte.</p>
            <div id="type">
                <span>Type de compte :</span>
                <button onClick={() => setPage(<Mail />)}>Particulier</button>
                <button onClick={() => setPage(<Entreprise />)}>Professionnel</button>
            </div>
        </div>
    )

    return page
}

export default Inscription