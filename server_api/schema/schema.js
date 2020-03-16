const graphql = require("graphql");

const {
    GraphQLObjectType, GraphQLString, GraphQLSchema,
    GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull,
    GraphQLBoolean,
} = graphql

const Brands = require("../models/brand")
const Products = require("../models/product")

const ProductType = new GraphQLObjectType({
    name: "Product",
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: new GraphQLNonNull(GraphQLString)},
        brand: {
            type: BrandType,
            resolve({brandId}, args) {
                return Brands.findById(brandId)
            },
        },
    }),
})

const BrandType = new GraphQLObjectType({
    name: "Brand",
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: new GraphQLNonNull(GraphQLString)},
        brand: {
            type: new GraphQLList(ProductType),
            resolve({id}, args) {
                return Products.findById({brandId: id})
            },
        },
    }),
})