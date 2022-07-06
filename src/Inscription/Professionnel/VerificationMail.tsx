import React, { useEffect, useState } from 'react'
import { DataEntreprise } from '../interface/dataEntreprise'


const VerificationMail = ({ dataCompte }: { dataCompte: DataEntreprise }): JSX.Element => {
    console.log(dataCompte)
    const verification = (e: Event) => {
        const input = e.target as HTMLInputElement

        input.value = input.value.replace(/[^0-9]/g,'')
        if ((e.target as HTMLInputElement).value == "")
            return

        if (input.parentElement?.nextElementSibling)
            input.parentElement?.nextElementSibling.getElementsByTagName("input")[0].focus()
        else if (input.parentElement?.parentElement?.id === "first") {
            let divs = input.parentElement?.parentElement?.parentElement?.getElementsByTagName("div")
            if (divs) 
                (Array.from(divs).filter((el) => el.id === "last")[0] as HTMLDivElement)
                    .getElementsByTagName("input")[0].focus()
        }
        else {
            const code = document.getElementsByTagName("input")

            for (let i = 0; i < code.length; i++)
                if ((code[i] as HTMLInputElement).value == "")
                    return
    
            window.location.href = "/compte"
        }
    }

    useEffect(() => {
        const code = document.getElementById("code")?.getElementsByTagName("input")
        if (!code) return
        for (let i = 0; i < code.length; i++)
            code[i].addEventListener("input", verification)
        
    })

    let [page, setPage] = useState<JSX.Element>(
        <div className="inscription" id="verification_mail">
            <h1>Vérification de votre adresse mail</h1>

            <p>Veuillez saisir le code reçu à votre adresse mail :</p>
            <span>adresse@example.com</span>

            <Code />
            <span id="renvoyer_code">Vous n’avez rien reçu ? <span>Renvoyer le code</span> </span>

        </div>
    )
    return page
}

const Code = (): JSX.Element => {
    let code_number = (
        <div className="number">
            <input type="text" placeholder='0' maxLength={ 1 } />
        </div>
    )

    return (
        <div id="code">
            <div id="first">
                { code_number }
                { code_number }
            </div>
            <div id="last">
                { code_number }
                { code_number }
                { code_number }
            </div>
        </div>
    )
}

export default VerificationMail