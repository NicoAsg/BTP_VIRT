export const header_dark = () => {
    let headerDiv = window.document.getElementById("header")
    
    if (!headerDiv) return

    const changeHeader = (header: HTMLDivElement) => {
        header.style.background = "#FFFFFF99"

        header.style.color = "black"
    
        let images: HTMLCollectionOf<HTMLImageElement> = header.getElementsByTagName("img")

        for (let i = 0; i < images.length; i++)
            switch (images[i].alt) {
                case "Logo":
                    header.id == "header_static" ? images[i].src = "/btp_virt_logo_v4.png" : 
                                                    images[i].src = "/btp_virt_logo_short_dark.png"
                    break
                case "A propos":
                    images[i].src="/icon_ui_question.png"
                    break
                case "Messages":
                    images[i].src="/icon_ui_mail.png"
                    break
                case "Profile":
                    images[i].src="/icon_ui_profile.png" 
            }
    }

    let headers = headerDiv.getElementsByTagName("header")

    for (let i = 0; i < headers.length; i++)
        changeHeader(headers[i] as HTMLDivElement)


    
}