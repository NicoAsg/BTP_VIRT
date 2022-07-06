import React from 'react'
import { AnnonceElement } from './interfaces/AnnonceElement'

const Ratings = ({ dataAnnonce }: { dataAnnonce: AnnonceElement }): JSX.Element => {
    if (!dataAnnonce.note || !dataAnnonce.avis)
        return <span></span>
    
    let rating: JSX.Element[] = []
    for (let i = 0; i < 5; i++)
        if (i < dataAnnonce.note)
            rating.push(
                <span key={ i }><img src="/search/icon_ui_star_full.png" alt="1" className='rating_star' /></span>
            )
        else
            rating.push(
                <span key={ i }><img src="/search/icon_ui_star_empty.png" alt="0" className='rating_star' /></span>
            )
    rating.push(
        <span className="rating_nb" key={ 6 }>{ dataAnnonce.avis } avis vérifiés</span>
    )
    
    return (
        <div className="rating">
            { rating }
        </div>
    )
}

export default Ratings