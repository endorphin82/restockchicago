const graphql = require("graphql")

const {
    GraphQLObjectType, GraphQLString, GraphQLSchema,
    GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull,
    GraphQLBoolean,
} = graphql

const Categories = require("../models/category")
const Products = require("../models/product")

const ProductType = new GraphQLObjectType({
    name: "Product",
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: new GraphQLNonNull(GraphQLString)},
        category: {
            type: CategoryType,
            resolve({categoryId}, args) {
                return Categories.findById(categoryId)
            },
        },
    }),
})

const CategoryType = new GraphQLObjectType({
    name: "Category",
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: new GraphQLNonNull(GraphQLString)},
        icon: {type: new GraphQLList(GraphQLString)},
        image: {type: new GraphQLList(GraphQLString)},
        category: {
            type: new GraphQLList(ProductType),
            resolve({id}, args) {
                return Products.find({categoryId: id})
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
        category: {
            type: CategoryType,
            args: {id: {type: GraphQLID}},
            resolve(parent, {id}) {
                return Categories.findById(id)
            },
        },
        products: {
            type: new GraphQLList(ProductType),
            args: {name: {type: GraphQLString}},
            resolve(parent, {name}) {
                return Products.find({name: {$regex: name, $options: "i"}});
            },
        },
        categories: {
            type: new GraphQLList(CategoryType),
            args: {name: {type: GraphQLString}},
            resolve(parent, {name}) {
                return Categories.find({name: {$regex: name, $options: "i"}});
            },
        },
    }
})

module.exports = new GraphQLSchema({
    query: Query
})