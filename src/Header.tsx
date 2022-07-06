import React, { useEffect } from 'react'
import "./header.css"

const Header = ({ theme = "light" }): JSX.Element => {

    useEffect(() => {
        document.addEventListener("scroll", () => {
            let header = document.getElementById("header_scrolled")
            if (!header) return

            if (window.scrollY >= 230) {
                header.classList.remove("header_up", "d-none")
                header.classList.add("header_down")
            }
            else if (window.scrollY < 200 && header.classList.contains("header_down")) {
                header.classList.add("header_up")
                setTimeout(() => { header?.classList.remove("header_down"); header?.classList.add("d-none") }, 200)
            }
        })
    })

    const HeaderSample = ({ ids = "", classNames = "", theme }: { ids: string, classNames?: string, theme: string}): JSX.Element => {

        let linksImages : {
            logo: string
            logoShort: string
            a_propos: string
            message: string
            profile: string
        }
        theme == "light" ?  linksImages = {
            logo: "/btp_virt_logo_v3.png",
            logoShort: "/btp_virt_logo_short.png",
            a_propos: "/icon_ui_question_white.png",
            message: "/icon_ui_mail_white.png",
            profile: "/icon_ui_profile_white.png"
        } : linksImages = {
            logo: "/btp_virt_logo_short.png",
            logoShort: "/btp_virt_logo_short_dark.png",
            a_propos: "/icon_ui_question.png",
            message: "/icon_ui_mail.png",
            profile: "/icon_ui_profile.png" 
        }

        return (
            <header id={ ids } className={ classNames }>
                <div id="links">
                    <span onClick={ () => window.location.href="/materiel" } id="header_materiel" className='link'>Matériel</span>
                    <span onClick={ () => window.location.href="/artisant" } id="header_artisant" className='link'>Artisant</span>
                    <span onClick={ () => window.location.href="/emploi" } id="header_emploi" className='link'>Emploi</span>
                </div>

                <img id="logo" onClick={ () => window.location.href="/" } src={ ids == "header_static" ? linksImages.logo : linksImages.logoShort } alt="Logo" />

                <div id="header_left">
                <div>
                        <img src={ linksImages.a_propos } alt="A propos" />
                        <span>A propos</span>
                    </div>
                    <div onClick={ () => window.location.href="/messages" }>
                        <img src={ linksImages.message } alt="Messages" />
                        <span>Messages</span>
                    </div>
                    <div onClick={ () => window.location.href="/connexion" }>
                        <img src={ linksImages.profile } alt="Profile" />
                        <span>Mon compte</span>
                    </div>
                </div>
            </header>
        )
    }

    return (
        <div id="header">
            <HeaderSample ids="header_static" theme={ theme }/>

            <HeaderSample ids="header_scrolled" classNames="d-none" theme={ theme }/>
        </div>
    )

    // useEffect(() => {
    //     let showDropdown = (event: MouseEvent) => {
    //         let header = event.target as HTMLElement
    //         let dropdown = (event.target as HTMLElement).nextElementSibling as HTMLElement

    //         if (dropdown && header) {
    //             dropdown.style.visibility = "visible"
    //             header.style.visibility = "hidden"
    //         }
    //     }

    //     let hideDropdown = (event: MouseEvent) => {
    //         let header = (event.target as HTMLElement).previousElementSibling as HTMLElement
    //         let dropdown = event.target as HTMLElement

    //         if (dropdown && header) {
    //             dropdown.style.visibility = "hidden"
    //             header.style.visibility = "visible"
    //         }
    //     }

    //     document.getElementById("header_materiel")?.addEventListener("mouseenter", showDropdown)
    //     document.getElementById("materiel_dropdown")?.addEventListener("mouseleave", hideDropdown)

    //     document.getElementById("header_artisant")?.addEventListener("mouseenter", showDropdown)
    //     document.getElementById("artisant_dropdown")?.addEventListener("mouseleave", hideDropdown)

    //     document.getElementById("header_emploi")?.addEventListener("mouseenter", showDropdown)
    //     document.getElementById("emploi_dropdown")?.addEventListener("mouseleave", hideDropdown)
    // })
    
    // return (
        // <header>
        //     <nav>
        //         {/* <input type="text" placeholder='Rechercher' />
        //         <span onClick={ () => window.location.href = "/professionnel" }>Espace pro</span>
        //         <span onClick={ () => window.location.href = "/particulier" }>Espace particulier</span> */}
        //         <div>
        //         <img id="logo" onClick={ () => window.location.href="/" } src="/btp_virt_logo_v3.png" alt="Logo" />
        //             {/* <img id="logo" onClick={ () => window.location.href="/" } src="data:image; base64, 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 cXFxoj61denSZRqKkjCcnZ0pMjKSoXkOyUUTEBAgavuYmJhqo7+KGcbq4eFBb7/99loUJWGIXcQS QPIqXnrpJVFt9upE/vzzz3lRUZHg47Rr1y4XxUg4+gqVDarHWioXMmjQoKtjx44VXAuXlZXRwoUL +eLFi59oNl67JjwasKOjI02bNs1V6oWkefPmFBIS8rq9vf2ZsrIyf8ZYSXl5ef07d+4cOXnypKhj cc7pnXfe4du3b0dzHZKLJyQkZPfBgwcFL8Jw8eLFJ/4dFhYWvHWr8NWMxC7GaK48//zzzw8ZMuRU 5ZtOxZ9XiYgtWrSIi13eKDMzkxYvXswXLlwI0dFcF8e4ceNGiNleoVA88e+oqKhzYvZ/uhUgVR4T /F98+umnTMwnzErOnDlDhw8fxpQ9SK5RbS6q6fj42ti3b98WvG/9+vVReirYvn07EzsjUKlU0u7d uwuQe5BcNGKbgMnJyUREtGTJEi5mNdSOHTtizvNj9OnT53ex+zx8+JAmT56MIOuQXDzu7u6itp8z Zw4XMAiuCgcHB8x5foqJEye+5uvrK3o/fa8lDyQq+RtvvNFPzPZXrlwRdfzg4GCUnGfw7bffip4V qFQqafTo0ajNIbk4hg0bdlgmk+nt+PPmzUOvcPUPWNGvMenp6TRjxgyIDsnF0blzZ70c18/PD6Wm BiZMmNCncePGoveLjY1F5kFy8bWt2IiuQvjmm29Qi6vhq6++YmLDKiuVSho/fjxqc0gujiZNmug2 s6ysUGIE8t///lcpdh+5XE6bNm1CgDdILpy1a9fqtNbt16/fbhQZYUyfPl2mScy7I0eO9EbuQXJR 6Go1DsaY6BF1lk7Xrl1FL91cUlJCX375ZRFyD5ILZtCgQZPEjsZ6Fu3bt0dpEcnYsWMnavLKdPz4 cXvkHiQXzMiRIzdqW5szxmjJkiXocNOA9evXi8638vJyWrhwITrhILlwXnzxRaU2+2MBQ+1o27at 6H3OnTuHjIPkwpk+fbrMyclJo31lMhmtWrUKtbgWaBpq+X//+x9qc0guHE2Hour6M5yl8uKLL4re 58yZM8g4SC6cuXPnMgcHB9G1+Jo1awxai5eUlIjqdGKMlYg9x9Pz6NVx6NAhN22va968eczGxkb0 fp999pnOa/OysjJRQ/JKS0shubkgdsVRf39/g6fR2dn5gpjt69Sp85nYc4hZXtnKyor69euXrYtr e+WVV27b2wt/hslkMkpLS9N5Hnt4eHwoZnt3d/fbBAAAAAAAAAAAAAAAAAAAC+L/AZkoAIP+mugF AAAAAElFTkSuQmCC" alt="logo" /> */}
        //         </div>
        //         <span onClick={ () => window.location.href="/materiel" } id="header_materiel" className='link'>Matériel</span>
        //         <div id="materiel_dropdown" className="dropdown">
        //             <span onClick={ () => window.location.href="/materiel" } className="main_dropdown link">Matériel</span>
        //             <div>
        //                 <span onClick={ () => window.location.href="/materiel" } className='link'>Voir les annonces</span>
        //                 <span className='link'>Catégories</span>
        //                 <span className='link'>Poster une annonce</span>
        //             </div>
        //         </div>
        //         <span onClick={ () => window.location.href="/artisant" } id="header_artisant">Artisant</span>
        //         <div id="artisant_dropdown" className="dropdown">
        //             <span onClick={ () => window.location.href="/artisant" } className='main_dropdown link'>Artisant</span>
        //             <div>
        //                 <span onClick={ () => window.location.href="/artisant" } className='link'>Voir les artisants</span>
        //                 <span className='link'>Catégories</span>
        //                 <span className='link'>Espace Artisant</span>
        //             </div>
        //         </div>
        //         <span onClick={ () => window.location.href="/emploi" } id="header_emploi">Emploi</span>
        //         <div id="emploi_dropdown" className="dropdown">
        //             <span onClick={ () => window.location.href="/emploi" } className='main_dropdown link'>Emploi</span>
        //             <div>
        //                 <span onClick={ () => window.location.href="/emploi" } className='link'>Voir les offres d'emploi</span>
        //                 <span className='link'>Catégories</span>
        //                 <span className='link'>Espace Employeur</span>
        //             </div>
        //         </div>
        //     </nav>
        //     <div id="header_left">
        //         <div>
        //             <img src="/icon_ui_mail.png" alt="Message" />
        //             <span>Message</span>
        //         </div>
        //         <div onClick={ () => window.location.href="/connexion"}>
        //             <img src="/icon_ui_profile.png" alt="Profile" />
        //             <span>Mon compte</span>
        //         </div>
        //     </div>
        // </header>


    
}

export default Header