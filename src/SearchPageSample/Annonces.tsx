import React from 'react'
import { AnnonceElement } from './interfaces/AnnonceElement'
import Ratings from "./Ratings"

const Annonces = ({ dataAnnonces }: { dataAnnonces: AnnonceElement[] }): JSX.Element => {
    let annonces: JSX.Element[] = []
    dataAnnonces.forEach((annonce, index) => {
        annonces.push(
            <div className="annonce" key={ index } onClick={ () => window.location.href=annonce.link }>
                <div className="image">
                    <img src={ annonce.img } alt="Annonce" />
                </div>
                <div className="text_annonce">
                    <div className="head">
                        <div>
                            <p>{ annonce.title }</p>
                            { annonce.pro ? <span className="pro">Pro</span> : <span></span> }
                        </div>
                        <span className="type">{ annonce.type }</span>
                    </div>
                    { annonce.prix && annonce.refPrix ? <span className="prix">{ annonce.prix }€ { annonce.refPrix }</span> : <span></span> }
                    <span className="description">{ annonce.description }</span>
                    <div className="foot">
                        <span className="localisation">{ annonce.location }</span>
                        <Ratings dataAnnonce={annonce} />
                    </div>
                </div>
            </div>
        )}
    )

    return (
        <div id='annonces'>
            { annonces }
            <div id="pages">
                <img src="/search/icon_ui_arrow_left.png" alt="Précedent" className="page_nav" />
                <span>1</span>
                <img src="/search/icon_ui_arrow_right.png" alt="Suivant" className="page_nav" />
            </div>
        </div>
    )
}

export default Annonces