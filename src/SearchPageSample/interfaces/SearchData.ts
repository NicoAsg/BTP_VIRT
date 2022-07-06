import { SearchElement } from "./SearchElement"
import { AnnonceElement } from "./AnnonceElement"

export interface SearchData {
    id: string
    title: string

    buttonAdd: string

    search: SearchElement
    
    annoncesTitle: string
    annonces: AnnonceElement[]
}