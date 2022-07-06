import React from 'react'

import './louer.css'

interface AnnonceInfos {
    title: string
    desc: string
    price: number
    location: string
    photoPath: string
}

const Annonce = ({ infos }: { infos: AnnonceInfos }): JSX.Element => {
    return (
        <div className='annonce' onClick={ () => document.location.href="/particulier/annonces/details" }>
            <div className="photo">
                <div>
                    <img src={ infos.photoPath } alt="Annonce" />
                </div>
            </div>
            <div className="infos">
                <h2>{ infos.title }</h2>
                <span>Description : {  infos.desc }</span>
                <h1>Prix : {  infos.price } €</h1>
                <p>Localisation : {  infos.location }</p>
            </div>
        </div>
    )
}

const Louer = (): JSX.Element => {
    let annonce10: JSX.Element[] = []

    for (let i = 0; i < 10; i++)
        annonce10.push(<Annonce key={ i } infos={ {
            title: "Titre annonce",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim...",
            price: 100,
            location: "75000 - Paris",
            photoPath: "/image_not_found.png"
        } }/>)


    return (
        <div id='louer'>
            <h1 id="title">Louer du matériel</h1>
            { annonce10 }
        </div>
    )
}

export default Louer