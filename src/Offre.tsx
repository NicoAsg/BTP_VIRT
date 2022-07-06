import React from 'react'

import './offre.css'

interface OffreDetails {
    title: string
    desc: string
    requirements: string[]
    company: string
    companyDescription: string
    location: string
    photoPath: string
}

const Offre = (): JSX.Element => {
    const details: OffreDetails = {
        title: "Titre de l'offre",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.",
        requirements: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Sed non risus.",
            "Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
            "Cras elementum ultrices diam.",
            "Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
            "Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat."
        ],
        company: "Nom de l'entreprise",
        companyDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
        location: "75000 - Paris",
        photoPath: "/image_not_found.png"
    }

    let listRequirements: Array<JSX.Element> = []
    for (let i = 0; i < details.requirements.length; i++)
        listRequirements.push(
            <li key={ i }>{ details.requirements[i] }</li>
        )

    return (
        <div id="offre">
            <h1>{ details.title }</h1>
            <div id="company">
                <div id="companyLogo">
                    <div>
                        <img src={ details.photoPath } alt="Company" />
                    </div>
                </div>
                <div id="companyInfos">
                    <p><span id="companyName">{ details.company }</span> <br /> <span id="companyLocation">{ details.location }</span></p>
                    <span>{ details.companyDescription }</span>
                </div>
            </div>
            <p id="description"><span>Description de l'offre :</span> <br /><br /> { details.desc }</p>
            <div id="requirements">
                <p>Compétences requises :</p>
                <ul>
                    { listRequirements }
                </ul>
            </div>
            <button>Postuler</button>
        </div>
    )
}

export default Offre