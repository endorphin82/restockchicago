import { gql } from "apollo-boost"

export const addProductMutation = gql`
    mutation addProduct($name: String!, $price: Int!, $categoryId: ID!, $images: [String] ) {
        addMovie(name: $name, price: $price, categoryId: $categoryId, images: $images ){
            name
        }
    }
`