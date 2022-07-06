import React from 'react'
import "./index.css"
import { ServiceData } from './interface/ServiceData'
import Service from './Service'

const Index = (): JSX.Element => {
    const materielData: ServiceData = {
        id: "materiel_box",
        title: "Matériel",
        elements: [{
            photo: "icon_ui_construction.png",
            name: "Engins"
        },
        {
            photo: "icon_ui_tools.png",
            name: "Outillages"
        },
        {
            photo: "icon_ui_material.png",
            name: "Matériaux"
        },
        {
            photo: "icon_ui_trash.png",
            name: "Gravats"
        }],
        button: "Voir toutes les annonces",
        link: "/materiel"
    }
    const artisantData: ServiceData = {
        id: "artisant_box",
        title: "Artisant",
        elements: [{
            photo: "icon_ui_construction_man.png",
            name: "Services d’artisanat"
        }],
        button: "Voir tous les artisants",
        link: "/artisant"
    }
    const emploiData: ServiceData = {
        id: "",
        title: "Emploi",
        elements: [{
            photo: "icon_ui_work.png",
            name: "Offres d’emploi"
        }],
        button: "Voir toutes les offres",
        link: "/emploi"
    }

    return (
        <div id="index">
            <div id="main">
                <div id="input">
                    <div id="section">
                        <img src="/index/icon_ui_web_white.png" alt="Voir" />
                        <span>Tous le site</span>
                    </div>
                    <input type="text" placeholder="Rechercher sur le site" />
                    <div id="categorie">
                        <img src="/search/icon_ui_list_white.png" alt="Liste" />
                        <span>Catégorie</span>
                    </div>
                </div>
                <div id="rechercher">
                    <span>Rechercher</span>
                </div>
            </div>
            
            <div id="slogan">
                <h1>BTP VIRT, le site internet essentiel à vos projets</h1>
            </div>

            <div id="nous_choisir">
                <h1>POURQUOI CHOISIR BTP VIRT ?</h1>
                <div>
                    <div className="argument">
                        <img src="https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_60/1270913/162905_26467.gif" alt="Satisfaction" />
                        <h3>Satisfaction garantie</h3>
                        <span>A small tagline</span>
                        <p>A sentence or two describing this item. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
                    </div>
                    <div className="argument">
                        <img src="https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_60/1270913/4643_556983.gif" alt="Idées" />
                        <h3>Idées novatrices</h3>
                        <span>A small tagline</span>
                        <p>A sentence or two describing this item. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
                    </div>
                    <div className="argument">
                        <img src="https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_60/1270913/970595_534247.gif" alt="Service" />
                        <h3>Services de qualité</h3>
                        <span>A small tagline</span>
                        <p>A sentence or two describing this item. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
                    </div>
                    <div className="argument">
                        <img src="https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_60/1270913/173249_311181.gif" alt="Personnalisation" />
                        <h3>Personnalisation avancée</h3>
                        <span>A small tagline</span>
                        <p>A sentence or two describing this item. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
                    </div>
                </div>
            </div>

            <div id="about">
                <div id="left">
                    <div>
                        <h1>LOCATION/ACHAT DE MATERIEL</h1>
                        <h1>TROUVER UN ARTISANT</h1>
                        <h1>PROPOSER/TROUVER UN EMPLOI</h1>
                    </div>
                </div>

                <div id="right">
                    <div>
                        <h1>QUI SOMMES-NOUS ?</h1>
                        <p>Creating quality urban lifestyles, building stronger communities.</p>
                        <p>A sentence or two describing this item. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
                    </div>
                </div>
            </div>


            <div id="services">
                <h1>SERVICES</h1>
                <div>
                    <div>
                        <div>
                            <h2>HOME RENOVATION</h2>
                            <p>A sentence or two describing this item. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2>ROOFING PRODUCTS AND SERVICES</h2>
                            <p>A sentence or two describing this item. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2>BATHROOM REMODELING</h2>
                            <p>A sentence or two describing this item. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2>REPLACEMENT WINDOWS & DOORS</h2>
                            <p>A sentence or two describing this item. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="contact">
                <div>
                    <h1>SIGN UP</h1>
                    <h3>For All Of Your Remodeling And Maintenance Needs.</h3>
                    <div>
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Email" />
                        <button>Submit</button>
                    </div>
                </div>
            </div> 

            <div id="all_services">
                {/* <div id = "left_services">
                    <Service data={ materielData }/>
                </div>
                <div id="right_services">
                    <Service data={ artisantData }/>
                    <Service data={ emploiData }/>
                </div> */}
            </div>
        </div>
    )
}

export default Index