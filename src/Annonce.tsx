import React from 'react'

import "./annonce.css"

interface AnnonceDetails {
    title: string
    desc: string
    price: number
    location: string
    photoPath: string
    vendor: string
    vendorPicture: string
}


const Annonce = (): JSX.Element => {
    const details: AnnonceDetails = {
        title: "Titre de l'annonce",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.",
        price: 100,
        location: "75000 - Paris",
        photoPath: "/image_not_found.png",
        vendor: "Nom / Pseudo",
        vendorPicture: "/image_not_found.png"
    }

    return (
        <div id="details_annonce">
            <div id="photo">
                <div>
                    <img src={ details.photoPath } alt="Annonce" />
                </div>
            </div>
            <div id="infos">
                <div>
                    <h2>{ details.title }</h2>
                    <span>Localisation : <br /> { details.location }</span>
                </div>
                <h1>{ details.price } €</h1>
            </div>
            <p id="description"><span>Description de l'annonce :</span><br /><br /> { details.desc }</p>
            <div id="vendor">
                <h2>Annonce postée par</h2>
                <div id="vendorInfos">
                    <div id="vendorPicture">
                        <div>
                            <img src={ details.vendorPicture } alt="Vendeur" />
                        </div>
                    </div>
                    <div>
                        <p>{ details.vendor }</p>
                        <span>Membre depuis 2022</span>
                    </div>
                </div>
                <button id="contactVendor">Contacter</button>
            </div>
        </div>
    )
}

export default Annonce