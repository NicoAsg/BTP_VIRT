import React from "react"
import "./mainPage.css"

interface mainComponentTexts {
    title: string
    description: string
    button: string
    link: string
}

const MainComponent = ({ texts }: { texts: mainComponentTexts }): JSX.Element => {
    return (
        <div className="mainComponent">
            <h2>{ texts.title }</h2>
            <div>{ texts.description }</div>
            <button onClick={ () => window.location.href = texts.link }>{ texts.button }</button>
        </div>
    )
}

const MainPage = (): JSX.Element => {
    return (
        <div id="mainPage">
            <h1>Bienvenu sur BTP VIRT tout le BTP, en virtuel</h1>
            <MainComponent texts={ {
                title: "Vous êtes un particulier ?",
                description: "Louez du matériel de BTP et recherchez un emploi dans le secteur",
                button: "Espace particulier",
                link: "particulier"
            } }/>
            <MainComponent texts={ {
                title: "Vous êtes un professionnel ?",
                description: "Mettez en location du matériel de BTP et trouvez un employé dans le secteur",
                button: "Espace professionnel",
                link: "professionnel"
            } }/>
        </div>
    )
}

export default MainPage