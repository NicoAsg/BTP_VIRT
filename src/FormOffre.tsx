import React from 'react'

import './formOffre.css'

const FormOffre = (): JSX.Element => {
    return (
        <div id='formOffre'>
            <h1>Proposer un emploi</h1>

            <form action="#">
                <div>
                    <label htmlFor="intitule">Intitulé : </label>
                    <input type="text" title="intitule" placeholder="" />
                </div>
                <div>
                    <label htmlFor="description">Description : </label>
                    <textarea title="description" placeholder="" cols={ 30 } rows={ 10 }/>
                </div>
                <div>
                    <label htmlFor="competences">Competences requises : </label>
                    <textarea title="competences" placeholder="" cols={ 30 } rows={ 10 }></textarea>
                </div>
                <button type="button" onClick={ () => window.location.href = '/professionnel' }>Envoyer</button>
            </form>
        </div>
    )
}

export default FormOffre