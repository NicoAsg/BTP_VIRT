import React from "react"
import "./connexion.css"
import {checkInputs } from "../Inscription/checkInputs"

const Connexion = (): JSX.Element => {
    return (
        <div id="connexion">
            <div id="content">
                <div id="main">
                    <h1>Connexion</h1>
                    <div id="identifiants">
                        <input type="mail" name="connexion" placeholder="Adresse mail" />
                        <input type="password" name="mot_de_passe" placeholder="Mot de passe"/>
                    </div>
                    <div id="checkbox">
                        <input type="checkbox" name="rester_connecter" id="rester_connecter" />
                        <label htmlFor="rester_connecter">rester connecter</label>
                    </div>
                    <button onClick={ () => {
                        if (checkInputs())
                            window.location.href = "/compte"
                    }}>Se connecter</button>
                </div>
                <div id="inscription">
                    <h3>1ère connexion ?</h3>
                    <button onClick={ () => window.location.href="/inscription"} >Créer un compte</button>
                </div>
            </div>
        </div>
    )
}

export default Connexion