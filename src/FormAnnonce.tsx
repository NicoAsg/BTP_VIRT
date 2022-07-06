import React from 'react'

import "./formAnnonce.css"

const FormAnnonce = (): JSX.Element => {
    return (
        <div id="formAnnonce">
            <h1>Proposer du matériel</h1>

            <form action="#">
                <div>
                    <label htmlFor="materiel">Matériel : </label>
                    <input type="text" name="materiel" title="materiel" placeholder="" />
                </div>

                <div>
                    <label htmlFor="type">Type de matériel : </label>
                    <select name="type" title="type"></select>
                </div>

                <div>
                    <label htmlFor="price">Prix : </label>
                    <input type="text" name="price" title="price" />
                </div>

                <div>
                    <button>Ajouter une photo</button>
                </div>
                
                <div>
                    <label htmlFor="description">Description : </label>
                    <textarea name="description" title="description" placeholder="" cols={ 30 } rows={ 10 }></textarea>
                </div>

                <button type="button" onClick={ () => document.location.href='/professionnel' }>Envoyer</button>
            </form>
        </div>
    )
}

export default FormAnnonce