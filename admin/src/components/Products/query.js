import { gql } from "apollo-boost"

export const productsAllQuery = gql`
    {
        productByName(name: ""){
            id,
            name,
            price,
            categoryId,
            images
        }
    }

`