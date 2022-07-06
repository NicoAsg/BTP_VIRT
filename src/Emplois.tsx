import React from 'react'

import "./emplois.css"

interface OffreInfos {
    title: string
    desc: string
    company: string
    location: string
    photoPath: string
}

const Offre = ({ infos }: { infos: OffreInfos }): JSX.Element => {
    return (
        <div className='offre' onClick={() => document.location.href="/particulier/offres/details"}>
            <h2>{ infos.title }</h2>
            <div className="company">
                <div className="photo">
                    <div>
                        <img src={ infos.photoPath } alt="Annonce" />
                    </div>
                </div>
                <span>{ infos.company } ({ infos.location })</span>
            </div>
            <p>Description : <br /> { infos.desc }</p>
        </div>
    )
}

const Emplois = (): JSX.Element => {
    let offres10: JSX.Element[] = []

    for (let i = 0; i < 10; i++)
        offres10.push(<Offre key={ i } infos={ {
            title: "Titre Offre d'Emploi",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras...",
            company: "Nom entreprise",
            location: "75000 - Paris",
            photoPath: "/image_not_found.png"
        } }/>)

    return (
        <div id='emplois'>
            { offres10 }
        </div>
    )
}

export default Emplois