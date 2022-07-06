import React from 'react'
import './professionnel.css'

interface descriptionComponentTexts {
    title: string
    description: string
    button: string
    href: string
}

const DescriptionComponent = ({ texts }: { texts: descriptionComponentTexts }): JSX.Element => {
    return (
        <div className="descriptionComponent" onClick={ () => document.location.href = texts.href }>
            <h1>{ texts.title }</h1>
            <div>{ texts.description }</div>
            <button>{ texts.button }</button>
        </div>
    )
}

const Professionnel = (): JSX.Element => {
    return (
        <div id='professionnel'>
            <div id="links">
                <h1>Mettre du matériel en location, proposer un emploi et plus encore</h1>
                <div>
                    <button onClick={ () => document.location.href = "/professionnel/post/annonce" }>Proposer du matériel</button>
                    <button onClick={ () => document.location.href = "/professionnel/post/offre" }>Proposer un emploi</button>
                </div>
            </div>
            <DescriptionComponent texts={ {
                title: 'La location de matériel',
                description: 'Blabla marketing : Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                button: 'Proposer du matériel',
                href: '/professionnel/post/annonce'
            } } />
            <DescriptionComponent texts={ {
                title: 'Les offres d’emploi',
                description: 'Blabla marketing : Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                button: 'Proposer un emploi',
                href: '/professionnel/post/offre'
            } } />
        </div>
    )
}

export default Professionnel