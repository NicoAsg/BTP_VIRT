import React from 'react'
import './particulier.css'

interface descriptionComponentTexts {
    title: string
    description: string
    button: string
    href: string
}

const DescriptionComponent = ({ texts }: { texts: descriptionComponentTexts }): JSX.Element => {
    return (
        <div className="descriptionComponent" onClick={ () => document.location.href = texts.href}>
            <h1>{ texts.title }</h1>
            <div>{ texts.description }</div>
            <button>{ texts.button }</button>
        </div>
    )
}

const Particulier = (): JSX.Element => {
    return (
        <div id='particulier'>
            <div id="links">
                <h1>Louer du matériel, chercher un emploi et plus encore</h1>
                <div>
                    <button onClick={ () => window.location.href="/particulier/annonces" }>Louer du matériel</button>
                    <button onClick={ () => window.location.href="/particulier/offres" }>Trouver un emploi</button>
                </div>
            </div>
            <DescriptionComponent texts={ {
                title: 'La location de matériel',
                description: 'Blabla marketing : Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                button: 'Louer du matériel',
                href: '/particulier/annonces'
            } } />
            <DescriptionComponent texts={ {
                title: 'Les offres d’emploi',
                description: 'Blabla marketing : Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                button: 'Trouver un emploi',
                href: "/particulier/offres"
            } } />
        </div>
    )
}

export default Particulier