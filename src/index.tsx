import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import './index.css'
import reportWebVitals from './reportWebVitals'


import Header from './Header'

// import Particulier from './Particulier'
// import Louer from './Louer'
// import Annonce from './Annonce'
// import Emplois from './Emplois'
// import Offre from './Offre'

// import Professionnel from './Professionnel'
// import FormAnnonce from './FormAnnonce'
// import FormOffre from './FormOffre'

import Footer from './Footer'
import Index from './Index/Index'
import Materiel from './Materiel/Materiel'
import AnnonceMateriel from './Materiel/AnnonceMateriel'
import Artisant from './Artisant/Artisant'
import Emploi from './Emploi/Emploi'
import AnnonceArtisant from './Artisant/AnnonceArtisant'
import AnnonceEmploi from './Emploi/AnnonceEmploi'
import Connexion from './Connexion/Connexion'
import Inscription from './Inscription/Inscription'
import Compte from './Compte/Compte'
import Messages from './Messages/Messages'

ReactDOM.render(
  <React.StrictMode>

    <Header />

    <BrowserRouter>
      <Routes>

        <Route path="/" element={ <Index /> } />

        {/* <Route path="/*" element={ <Index /> } /> */}

        <Route path="/connexion" element={ <Connexion /> }/>
        <Route path="/inscription" element={ <Inscription />} />

        <Route path="/compte" element={ <Compte /> } />

        <Route path="/messages" element={ <Messages /> } />

        <Route path="/materiel" element={ <Materiel /> } />
        <Route path="/materiel/annonce" element={ <AnnonceMateriel /> } />

        <Route path="/artisant" element={ <Artisant /> } />
        <Route path="/artisant/annonce" element={ <AnnonceArtisant /> } />

        <Route path="/emploi" element={ <Emploi /> } />
        <Route path="/emploi/annonce" element={ <AnnonceEmploi /> } />


        {/* <Route path="/particulier" element={ <Particulier />} />
        <Route path="/particulier/annonces" element={ <Louer /> } />
        <Route path="/particulier/annonces/details" element={ <Annonce /> } />
        <Route path="/particulier/offres" element={ <Emplois /> } />
        <Route path="/particulier/offres/details" element={ <Offre /> } />
        <Route path="/professionnel" element={ <Professionnel /> } />
        <Route path="/professionnel/post/annonce" element={ <FormAnnonce /> } />
        <Route path="/professionnel/post/offre" element={ <FormOffre /> } />  */}

      </Routes>
    </BrowserRouter>

    <Footer />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
