import React from "react"

const ReverseImagesCarousel = ({ links }: { links: string[] }): JSX.Element => {
    let selectCarousel: JSX.Element[] = []
    for(let i = 0; i < links.length; i++) {
        selectCarousel.push(
            <div className={i == 0 ? "image selected" : "image"} key={ i }>
                <img src={ links[i] } alt="image_carousel" />
            </div>
        )
    }
    
    return (
        <div className="images_carousel">
            <div className="select_carousel">
                { selectCarousel }
            </div>
            <div className="image_principale">
                <img src={ links[0] } alt="Photo principale" />
            </div>
        </div>
    )
}

export default ReverseImagesCarousel