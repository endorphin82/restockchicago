import { gql } from "apollo-boost"

export const categoriesByListNamesQuery = gql`
    query CategoriesByListNames($names: [String]){
        categoriesByListNames(names: $names){
            _id,
            name,
            icons
        }
    }
`