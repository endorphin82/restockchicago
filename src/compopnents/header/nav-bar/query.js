import { gql } from "apollo-boost"

export const categoriesByListNamesQuery = gql`
    {
        categoriesByListNames(names: ["jordan", "nike", "adidas", "supreme", "apparel", "accessories", "new arrivals", "gift cards", "shop all"]){
            id,
            name,
            icons
        }
    }
`