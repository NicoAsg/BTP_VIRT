import React from 'react'

interface VendeurData {
    nom: string
    nb_annonces: number
    annonces: AnnonceData[]
}

interface AnnonceData {
    vendeur: VendeurData | undefined

    titre: string
    type: string
    images: string[]
    prix: number
    refPrix: string | undefined
    location: string
    description: string
}

const AnnoncesCarousel = ({ data }: { data: AnnonceData[] }): JSX.Element => {
    let carousel: JSX.Element[] = []
    for (let i = 0; i < data.length; i++) {
        carousel.push(
            <div key={i} className="image_annonce">
                <div>
                    <img src={ data[i].images[0] } alt="Image annonce" />
                </div>
                <span>{ data[i].titre }</span>
            </div>
        )
    }
    
    return (
        <div className="carousel">
            { carousel }
        </div>
    )
}

export default AnnoncesCarousel