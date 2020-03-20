import { gql } from "apollo-boost";

export const categoriesAllQuery = gql`
    {
        categoriesAll{
            name,
            icons
        }
    }
`