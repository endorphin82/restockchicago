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
        icon: {type: new GraphQLNonNull(GraphQLString)},
        brand: {
            type: new GraphQLList(ProductType),
            resolve({id}, args) {
                return Products.findById({brandId: id})
            },
        },
    }),
})

const Query = new GraphQLObjectType({
    name: "Query",
    fields: {
        product: {
            type: ProductType,
            args: {id: {type: GraphQLID}},
            resolve(parent, {id}) {
                return Products.findById(id)
            },
        },
        brand: {
            type: BrandType,
            args: {id: {type: GraphQLID}},
            resolve(parent, {id}) {
                return Brands.findById(id)
            },
        },
        products: {
            type: new GraphQLList(ProductType),
            args: {name: {type: GraphQLString}},
            resolve(parent, {name}) {
                return Products.find({name: {$regex: name, $options: "i"}});
            },
        },
        brands: {
            type: new GraphQLList(ProductType),
            args: {name: {type: GraphQLString}},
            resolve(parent, {name}) {
                return Brands.find({name: {$regex: name, $options: "i"}});
            },
        },
    }
})

module.exports = new GraphQLSchema({
    query: Query
})