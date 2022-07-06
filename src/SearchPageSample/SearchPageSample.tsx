import React, { ChangeEventHandler } from 'react'
import { SearchData } from "./interfaces/SearchData"
import Annonces from './Annonces'

const SearchPageSample = ({ data }: { data: SearchData }): JSX.Element => {
    let radioChange = (change: React.ChangeEvent<HTMLInputElement>) => {
        let inputs = document.getElementsByClassName("radio")
        for (let i = 0; i < inputs.length; i++)
            if ((inputs[i] as HTMLInputElement).value != change.target.value)
                (inputs[i] as HTMLInputElement).checked = false
    }
    let typesSearch: JSX.Element[] = []
    for (let e of data.search.types)
        typesSearch.push(
            <span key={ e }>
                <input type="radio" name={ e } value={ e } className="radio" onChange={ radioChange } />
                <label htmlFor={ e }>{ e }</label>
            </span>
        )
    return (
        <div id={ data.id } className="search_page">
            <div id="top">
                <h1>{ data.title }</h1>
                <div id="add_button">
                    <img src="/search/icon_ui_plus_circle_white.png" alt="Plus" />
                    <span>{ data.buttonAdd }</span>
                </div>
                <div id="search">
                    <div id="types">
                        <span>
                            <input type="radio" name="Tout" value="Tout" className="radio" onChange={ radioChange } checked />
                            <label htmlFor="Tout">Tout</label>
                        </span>
                        { typesSearch }
                    </div>
                    <div id="input">
                        <input type="text" placeholder={ data.search.placeholder } />
                        <div id="categories">
                            <img src="/search/icon_ui_list_white.png" alt="Liste" />
                            <span>Catégories</span>
                        </div>
                    </div>
                    <div id="options">
                        <button id="location"><img src="/search/icon_ui_location_white.png" />Localisation</button>
                        <button id="prix"><img src="/search/icon_ui_currency_white.png" />Prix</button>
                    </div>
                    <div id="search_button">
                        <button>Rechercher</button>
                    </div>
                </div>
            </div>
            <div id="publicite">
                <img src="/search/btp_virt_logo_gray.png" alt="BTP VIRT" />
                <span>Publicité</span>
            </div>
            <div id="all_resuts">
                <h2>{ data.annoncesTitle }</h2>
                <Annonces dataAnnonces={ data.annonces } />
            </div>
        </div>
    )
}

export default SearchPageSample