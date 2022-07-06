export interface AnnonceElement {
    type: string

    link: string

    img: string
    title: string
    pro: boolean

    prix: number | undefined
    refPrix: string | undefined

    description: string
    location: string

    note: number | undefined
    avis: number | undefined
}