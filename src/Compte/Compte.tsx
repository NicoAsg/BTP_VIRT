import React, { MouseEventHandler, useEffect, useState } from "react"
import ReverseImagesCarousel from "../Annonce/ReverseImagesCarousel"
import { header_dark } from "../utils/header_dark"
import "./compte.css"
import InformationsPro from "./InformationsPro"
import { dataComptePro } from "./interface/dataComptePro"



const Compte = (): JSX.Element => {
    let data: dataComptePro = {
        nom: "Nom",
        prenom: "Prénom",

        photo: "/compte/icon_ui_user_circle.png",
        
        nomEntreprise: "Nom de l'entreprise",
        adresseEntreprise: "Adresse de l'entreprise",
        numeroEntreprise: "01 23 45 67 89",

        mail: "sample@example.com",
        lenMdp: 7
    }

    const HeaderPro = ({ selected }: { selected: string }): JSX.Element => {
        const changeSelected = (newSelected: string) => {
            selected = newSelected
            switch ( newSelected ) {
                case "informations":
                    setPage(
                        <div id="content">
                            <HeaderPro selected="informations" />
                            <InformationsPro data={ data } />
                        </div>
                    )
                    break
                case "artisant":
                    setPage(
                        <div id="content">
                            <HeaderPro selected="artisant" />
                            <ArtisantPro />
                        </div>
                    )
                    break
                case "employeur":
                    setPage(
                        <div id="content">
                            <HeaderPro selected="employeur" />
                            <EmployeurPro />
                        </div>
                    )
                    break
                case "annonces":
                    setPage(
                        <div id="content">
                            <HeaderPro selected="annonces" />
                            <MesAnnonces />
                        </div>
                    )
            }
            checkSelected()
        }

        const checkSelected = () => {
            let elmt = document.getElementById("header_compte_pro")?.getElementsByClassName("selected")[0]
            if (elmt) elmt.classList.remove("selected");
            (document.getElementById(selected) as HTMLDivElement).classList.add("selected")
        }
        useEffect(() => {
            header_dark()
            checkSelected()
        })

        return (
            <div id="header_compte_pro" className="header_compte">
                <div id="main">
                    <div id="informations" onClick={() => changeSelected("informations") }><span>Informations</span></div>
                    <div id="artisant" onClick={() => changeSelected("artisant") }><span>Espace Artisant</span></div>
                    <div id="employeur" onClick={() => changeSelected("employeur") }><span>Espace Employeur</span></div>
                    <div id="annonces" onClick={() => changeSelected("annonces") }><span>Mes Annonces</span></div>
                    <div id="parametres" className="last"><span>Paramètres</span></div>
                </div>
                <hr />
            </div>
        )
    }

    let [page, setPage] = useState<JSX.Element>(
        <div id="content">
            <HeaderPro selected="informations" />
            <InformationsPro data={ data } />
        </div>
    )

    return (
        <div className="compte" id="compte_main">
            <div id="main">
                <h2>Mon compte <span>Pro</span></h2>
                { page }
            </div>
        </div>
    )
}





const ArtisantPro = (): JSX.Element => {
    const HeaderArtisant = ({ selected }: { selected: string }): JSX.Element => {
        const changeSelected = (newSelected: string) => {
            selected = newSelected
            switch ( newSelected ) {
                case "profile":
                    setPage(
                        <div id="content">
                            <HeaderArtisant selected="profile" />
                            <ProfileArtisantPro />
                        </div>
                    )
                    break
                case "demandes":
                    setPage(
                        <div id="content">
                            <HeaderArtisant selected="demandes" />
                            <DemandesClient />
                        </div>
                    )
                    break
                case "avis":
                    setPage(
                    <div id="content">
                        <HeaderArtisant selected="avis" />
                        <AvisClients />
                    </div>
                    )
            }
            checkSelected()
        }

        const checkSelected = () => {
            let elmt = document.getElementById("header_compte_artisant")?.getElementsByClassName("selected")[0]

            if (elmt) elmt.classList.remove("selected");
            
            (document.getElementById(selected) as HTMLDivElement).classList.add("selected")
        }

        useEffect(() => checkSelected())

        return (
            <div id="header_compte_artisant" className="header_compte">
                <div id="main">
                    <div id="profile" onClick={() => changeSelected("profile") }><span>Profile Artisant</span></div>
                    <div id="demandes" onClick={() => changeSelected("demandes") }><span>Demandes Client</span></div>
                    <div id="avis" onClick={() => changeSelected("avis") } className="last"><span>Avis Clients</span></div>
                </div>
                <hr />
            </div>
        )
    }

    let [page, setPage] = useState<JSX.Element>(
        <div id="content">
            <HeaderArtisant selected="profile" />
            <ProfileArtisantPro />
        </div>
    )
    return (
        <div id="artisant">
            { page }
        </div>
    )
}

const ProfileArtisantPro = (): JSX.Element => {
    let realisations = [
        {
            photo: "/icon_ui_picture.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat vivamus at augue eget arcu dictum varius duis at. Fermentum odio eu feugiat pretium nibh ipsum. A iaculis at erat pellentesque adipiscing commodo. Placerat orci nulla pellentesque dignissim. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Pretium fusce id velit ut tortor pretium viverra."
        },
        {
            photo: "/icon_ui_picture.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat vivamus at augue eget arcu dictum varius duis at. Fermentum odio eu feugiat pretium nibh ipsum. A iaculis at erat pellentesque adipiscing commodo. Placerat orci nulla pellentesque dignissim. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Pretium fusce id velit ut tortor pretium viverra."
        },
        {
            photo: "/icon_ui_picture.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat vivamus at augue eget arcu dictum varius duis at. Fermentum odio eu feugiat pretium nibh ipsum. A iaculis at erat pellentesque adipiscing commodo. Placerat orci nulla pellentesque dignissim. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Pretium fusce id velit ut tortor pretium viverra."
        },
        {
            photo: "/compte/icon_ui_plus_circle.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat vivamus at augue eget arcu dictum varius duis at. Fermentum odio eu feugiat pretium nibh ipsum. A iaculis at erat pellentesque adipiscing commodo. Placerat orci nulla pellentesque dignissim. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Pretium fusce id velit ut tortor pretium viverra."
        }
    ]

    let linksPhotoRealisations: string[] = []
    for (let realisation of realisations)
        linksPhotoRealisations.push(realisation.photo)
    
    return (
        <div id="profile_artisant">
            <div id="afficher">
                <input type="checkbox" name="afficher_profile" id="afficher_profile"/>
                <label htmlFor="afficher_profile">Afficher votre profile dans l’annuaire du site</label>
            </div>

            <div id="description">
                <h3>Description</h3>
                <textarea placeholder="Description du Profile Artisant" />
            </div>

            <div id="realisations">
                <h3>Réalisations</h3>
                <div id="content">
                    <div id="selection_cercle">
                        <div className="selected"><span>1</span></div>
                        <div><span>+</span></div>
                    </div>
                    <div id="carousel">
                        <ReverseImagesCarousel links={ linksPhotoRealisations } />
                        <h4>Description de la réalisation</h4>
                        <textarea>{ realisations[0].description }</textarea>
                    </div>
                </div>
            </div>

            <div id="sauvegarder">
                <button>Enregistrer les modifications</button>
            </div>
        </div>
    )
}






interface DataDemandes {
    nom: string
    type: string

    descriptionShort: string
    description: string

    photoDemandeur: string
    nomDemandeur: string
}

const DemandesClient = () : JSX.Element => {
    let data: DataDemandes = {
        nom: "Nom de la demande",
        type: "Type de la demande",

        descriptionShort: "Description de la demande",
        description: "Description de la demande : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n\nFeugiat vivamus at augue eget arcu dictum varius duis at. Fermentum odio eu feugiat pretium nibh ipsum. A iaculis at erat pellentesque adipiscing commodo. Placerat orci nulla pellentesque dignissim. \n\nBlandit volutpat maecenas volutpat blandit aliquam etiam erat. Pretium fusce id velit ut tortor pretium viverra. Adipiscing diam donec adipiscing tristique risus.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat vivamus at augue eget arcu dictum varius duis at. Fermentum odio eu feugiat pretium nibh ipsum.\n\nA iaculis at erat pellentesque adipiscing commodo. Placerat orci nulla pellentesque dignissim. ",

        photoDemandeur: "/compte/icon_ui_user_circle.png",
        nomDemandeur: "Nom du demandeur"
    }

    let [page, setPage] = useState<JSX.Element>(<DetailDemande data={ data } />)

    useEffect(() => {
        (document.getElementsByClassName("element_liste_demande")[0] as HTMLDivElement).style.background = "#FF7A1A10"
    })

    return (
        <div id="compte_demandes_client">
            <div id="box_demandes">
                <div id="liste_demandes">
                    <ElmtListeDemande data={ data } />
                    <ElmtListeDemande data={ data } />
                    <ElmtListeDemande data={ data } />
                </div>
                <div id="detail_demande">
                    { page }
                </div>
            </div>
        </div>
    )
}

const ElmtListeDemande = ({ data }: { data: DataDemandes }) : JSX.Element => {
    let clickDemande = (event: any) => {
        let demandes = document.getElementsByClassName("element_liste_demande")

        for (let i = 0; i < demandes.length; i++)
            (demandes[i] as HTMLDivElement).style.background = "none";
        
        if ((event.target as HTMLDivElement).classList.contains("element_liste_demande"))
            (event.target as HTMLDivElement).style.background = "#FF7A1A10"
        else {
            let parent = (event.target as HTMLDivElement).parentElement
            if (parent)
                parent.style.background = "#FF7A1A10"
        }
        
    }
    return (
        <div className="element_liste_demande" onClick={ clickDemande }>
            <span className="nom">{ data.nom }</span>
            <span className="type">{ data.type }</span>
            <span className="description">{ data.descriptionShort }</span>
        </div>
    )
}

const DetailDemande = ({ data }: { data: DataDemandes }) : JSX.Element => {
    return (
        <div id="detail_demande">
            <div id="top">
                <span id="nom">{ data.nom }</span>
                <div id="demandeur">
                    <div id="photo">
                        <img src={ data.photoDemandeur } alt="Photo de profile" />
                    </div>
                    <span>{ data.nomDemandeur }</span>
                </div>
                <span id="type"><span>Type:</span> { data.type }</span>
            </div>
            <div id="description">
                <h4>Description de la demande</h4>
                <p>{ data.description }</p>
            </div>
        </div>
    )
}






interface DataAvisClients {
    nom: string
    note: number

    nomUtilisateur: string
    photoUtilisateur: string

    photos: string[]
    description: string
}

const AvisClients = (): JSX.Element => {
    let data: DataAvisClients = {
        nom: "Titre de l'avis",
        note: 5,

        photos: [
            "/icon_ui_picture.png",
            "/icon_ui_picture.png",
            "/icon_ui_picture.png"
        ],

        nomUtilisateur: "Nom de l'utilisateur",
        photoUtilisateur: "/compte/icon_ui_user_circle.png",

        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n\nFeugiat vivamus at augue eget arcu dictum varius duis at. Fermentum odio eu feugiat pretium nibh ipsum. A iaculis at erat pellentesque adipiscing commodo. Placerat orci nulla pellentesque dignissim. \n\nBlandit volutpat maecenas volutpat blandit aliquam etiam erat. Pretium fusce id velit ut tortor pretium viverra. Adipiscing diam donec adipiscing tristique risus.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat vivamus at augue eget arcu dictum varius duis at. Fermentum odio eu feugiat pretium nibh ipsum.\n\nA iaculis at erat pellentesque adipiscing commodo. Placerat orci nulla pellentesque dignissim."
    }

    useEffect(() => {
        (document.getElementsByClassName("element_liste_avis")[0] as HTMLDivElement).style.background = "#FF7A1A10"
    })

    return (
        <div id="compte_avis_client">
            <div id="box_avis">
                <div id="liste_avis">
                    <ElmtListeAvis data={ data } />
                    <ElmtListeAvis data={ data } />
                    <ElmtListeAvis data={ data } />
                </div>
                <div id="detail_avis">
                    <DetailAvis data={ data }/>
                </div>
            </div>
        </div>
    )
}

const ElmtListeAvis = ({ data }: { data: DataAvisClients }) : JSX.Element => {
    let clickDemande = (event: any) => {
        let demandes = document.getElementsByClassName("element_liste_avis")

        for (let i = 0; i < demandes.length; i++)
            (demandes[i] as HTMLDivElement).style.background = "none";
        
        if ((event.target as HTMLDivElement).classList.contains("element_liste_avis"))
            (event.target as HTMLDivElement).style.background = "#FF7A1A10"
        else {
            let parent = (event.target as HTMLDivElement).parentElement
            if (parent)
                parent.style.background = "#FF7A1A10"
        }
        
    }
    return (
        <div className="element_liste_avis" onClick={ clickDemande }>
            <span className="nom">{ data.nom }</span>
            <span className="note">Note : { data.note }</span>
        </div>
    )
}

const DetailAvis = ({ data }: { data: DataAvisClients }) : JSX.Element => {
    return (
        <div id="detail_avis">
            <div id="top">
                <span id="nom">{ data.nom }</span>
                <span id="note"><span>Note :</span> { data.note }</span>
                <div id="utilisateur">
                    <div id="photo">
                        <img src={ data.photoUtilisateur } alt="Photo de profile" />
                    </div>
                    <span>{ data.nomUtilisateur }</span>
                </div>
            </div>
            <div id="description">
                <h4>Description de l'avis</h4>
                <p>{ data.description }</p>
                <h4>Photos</h4>
                <div id="photos">
                    <img src={ data.photos[0] } alt="Image Avis" />
                    <img src={ data.photos[0] } alt="Image Avis" />
                    <img src={ data.photos[0] } alt="Image Avis" />
                </div>
            </div>
        </div>
    )
}







const EmployeurPro = (): JSX.Element => {
    const HeaderEmployeur = ({ selected }: { selected: string }): JSX.Element => {
        const changeSelected = (newSelected: string) => {
            selected = newSelected
            switch ( newSelected ) {
                case "offres":
                    setPage(
                        <div id="content">
                            <HeaderEmployeur selected="offres" />
                            <OffresEmploi />
                        </div>
                    )
                    break
                case "creer":
                    setPage(
                        <div id="content">
                            <HeaderEmployeur selected="creer" />
                        </div>
                    )
                    break
                case "profiles":
                    setPage(
                    <div id="content">
                        <HeaderEmployeur selected="profiles" />
                        <VoirProfiles />
                    </div>
                    )
            }
            checkSelected()
        }

        const checkSelected = () => {
            let elmt = document.getElementById("header_compte_employeur")?.getElementsByClassName("selected")[0]

            if (elmt) elmt.classList.remove("selected");
            
            (document.getElementById(selected) as HTMLDivElement).classList.add("selected")
        }

        useEffect(() => checkSelected())

        return (
            <div id="header_compte_employeur" className="header_compte">
                <div id="main">
                    <div id="offres" onClick={() => changeSelected("offres") }><span>Vos Offres d'Emploi</span></div>
                    <div id="creer" onClick={() => changeSelected("creer") }><span>Créer une Offre</span></div>
                    <div id="profiles" onClick={() => changeSelected("profiles") } className="last"><span>Voir les Profiles</span></div>
                </div>
                <hr />
            </div>
        )
    }

    let [page, setPage] = useState<JSX.Element>(
        <div id="content">
            <HeaderEmployeur selected="offres" />
            <OffresEmploi />
        </div>
    )

    return (
        <div id="compte_employeur">
            { page }
        </div>
    )
}








interface DataOffreEmploi {
    nom: string

    description: string
    descriptionShort: string
    
    competences: string[]

    horaires: string
    remuneration: string
}


const OffresEmploi = (): JSX.Element => {
    let data: DataOffreEmploi = {
        nom: "Intitulé de l'offre",

        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat vivamus at augue eget arcu dictum varius duis at. Fermentum odio eu feugiat pretium nibh ipsum. A iaculis at erat pellentesque adipiscing commodo. Placerat orci nulla pellentesque dignissim. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Pretium fusce id velit ut tortor pretium viverra. Adipiscing diam donec adipiscing tristique risus.",
        descriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...",

        competences: [
            "Permis X requis",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Feugiat vivamus at augue eget arcu dictum varius duis at.",
            "Fermentum odio eu feugiat pretium nibh ipsum.",
            "A iaculis at erat pellentesque adipiscing commodo. Placerat orci nulla pellentesque dignissim.",
            "Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Pretium fusce id velit ut tortor pretium viverra. Adipiscing diam donec adipiscing tristique risus."
        ],

        horaires: "Lundi - Jeudi : 7h - 15h",

        remuneration: "15 € par heure"
    }

    useEffect(() => {
        (document.getElementsByClassName("element_liste_offre")[0] as HTMLDivElement).style.background = "#FF7A1A10"
    })

    return (
        <div id="offres_emploi">
            <div id="box_offres">
                <div id="liste_offres">
                    <ElmtListeOffres data={ data } />
                    <ElmtListeOffres data={ data } />
                    <ElmtListeOffres data={ data } />
                </div>
                <div id="detail_offre">
                    <DetailOffre data={ data } />
                </div>
            </div>
        </div>
    )
}

const ElmtListeOffres = ({ data }: { data: DataOffreEmploi }) : JSX.Element => {
    let clickDemande = (event: any) => {
        let demandes = document.getElementsByClassName("element_liste_offre")

        for (let i = 0; i < demandes.length; i++)
            (demandes[i] as HTMLDivElement).style.background = "none";
        
        if ((event.target as HTMLDivElement).classList.contains("element_liste_offre"))
            (event.target as HTMLDivElement).style.background = "#FF7A1A10"
        else {
            let parent = (event.target as HTMLDivElement).parentElement
            if (parent)
                parent.style.background = "#FF7A1A10"
        }
        
    }
    return (
        <div className="element_liste_offre" onClick={ clickDemande }>
            <span className="nom">{ data.nom }</span>
            <span className="description">{ data.descriptionShort }</span>
        </div>
    )
}

const DetailOffre = ({ data }: { data: DataOffreEmploi }) : JSX.Element => {
    return (
        <div id="detail_offre">
            <div id="top">
                <span id="nom">{ data.nom }</span>
            </div>
            <div id="description">
                <h4>Description de l'offre</h4>
                <p>{ data.description }</p>

                <hr />
                
                <h4>Competences</h4>
                <ul>
                    { data.competences.map((e: string) => {
                        return <li>{ e }</li>
                    }) }
                </ul>

                <hr />

                <div>
                    <div id="horaires">
                        <h4>Horaires</h4>
                        <p>{ data.horaires }</p>
                    </div>
                    <div id="remuneration">
                        <h4>Rémunération</h4>
                        <p>{  data.remuneration }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}



const VoirProfiles = (): JSX.Element => {
    return (
        <div id="voir_profiles">
            <div id="criteres">
                <div>
                    <input type="checkbox" />
                    <label htmlFor="">Carreleur/se</label>
                </div>
                <div>
                    <input type="checkbox" />
                    <label htmlFor="">Charpentier/ère</label>
                </div>
                <div>
                    <input type="checkbox" />
                    <label htmlFor="">Conducteur/rice d'engin</label>
                </div>
                <div>
                    <input type="checkbox" />
                    <label htmlFor="">Peintre</label>
                </div>
            </div>
            <div id="profiles">
                <div id="profile">
                    <h1>Nom Prenom</h1>
                    <h3>Intitulé métier</h3>
                    <p>Description</p>
                </div>
                <div id="profile">
                    <h1>Nom Prenom</h1>
                    <h3>Intitulé métier</h3>
                    <p>Description</p>
                </div>
                <div id="profile">
                    <h1>Nom Prenom</h1>
                    <h3>Intitulé métier</h3>
                    <p>Description</p>
                </div>
                <div id="profile">
                    <h1>Nom Prenom</h1>
                    <h3>Intitulé métier</h3>
                    <p>Description</p>
                </div>
                <div id="profile">
                    <h1>Nom Prenom</h1>
                    <h3>Intitulé métier</h3>
                    <p>Description</p>
                </div>
            </div>
        </div>
    )
}




interface DataAnnonce {
    titre: string

    description: string
    descriptionShort: string

    location: string
    
    prix: number
}


const MesAnnonces = (): JSX.Element => {
    let data: DataAnnonce = {
        titre: "Titre de l'annonce",

        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat vivamus at augue eget arcu dictum varius duis at. Fermentum odio eu feugiat pretium nibh ipsum. A iaculis at erat pellentesque adipiscing commodo. Placerat orci nulla pellentesque dignissim. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Pretium fusce id velit ut tortor pretium viverra. Adipiscing diam donec adipiscing tristique risus.",
        descriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...",

        location: "Paris 15 75015",

        prix: 100
    }

    useEffect(() => {
        (document.getElementsByClassName("element_liste_annonce")[0] as HTMLDivElement).style.background = "#FF7A1A10"
    })

    return (
        <div id="offres_emploi">
            <div id="box_offres">
                <div id="liste_offres">
                    <ElmtListeAnnonces data={ data } />
                    <ElmtListeAnnonces data={ data } />
                    <ElmtListeAnnonces data={ data } />
                </div>
                <div id="detail_offre">
                    <DetailAnnonce data={ data } />
                </div>
            </div>
        </div>
    )
}

const ElmtListeAnnonces = ({ data }: { data: DataAnnonce }) : JSX.Element => {
    let clickDemande = (event: any) => {
        let demandes = document.getElementsByClassName("element_liste_annonce")

        for (let i = 0; i < demandes.length; i++)
            (demandes[i] as HTMLDivElement).style.background = "none";
        
        if ((event.target as HTMLDivElement).classList.contains("element_liste_annonce"))
            (event.target as HTMLDivElement).style.background = "#FF7A1A10"
        else {
            let parent = (event.target as HTMLDivElement).parentElement
            if (parent)
                parent.style.background = "#FF7A1A10"
        }
        
    }
    return (
        <div className="element_liste_annonce" onClick={ clickDemande }>
            <span className="nom">{ data.titre }</span>
            <span className="description">{ data.descriptionShort }</span>
        </div>
    )
}

const DetailAnnonce = ({ data }: { data: DataAnnonce }) : JSX.Element => {
    return (
        <div id="detail_offre">
            <div id="top">
                <span id="nom">{ data.titre }</span>
                <span id="prix">{ data.prix }</span>
                <span id="location">{ data.location }</span>
            </div>
            <div id="description">
                <h4>Description de l'annonce</h4>
                <p>{ data.description }</p>
            </div>
        </div>
    )
}



export default Compte