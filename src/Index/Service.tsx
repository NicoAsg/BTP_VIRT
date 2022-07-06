import React from 'react'
import { ServiceData } from './interface/ServiceData'

const Service = ({ data }: { data: ServiceData }): JSX.Element => {
    const data_elements: JSX.Element[] = []
    for (let element of data.elements)
        data_elements.push(
        <div className="service_elmt" key={element.photo}>
            <img src={ "/index/" + element.photo } alt="Services d'artisanat" />
            <p>{ element.name }</p>
        </div>
        )

    return (
        <div id={ data.id } className="box_index">
            <h2>{ data.title }</h2>
            <div className="services_index">
                { data_elements }
            </div>
            <div className="link">
                <button onClick={ () => window.location.href=data.link }>{ data.button }</button>
            </div>
        </div>
    )
}

export default Service