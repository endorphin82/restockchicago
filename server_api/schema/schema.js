const graphql = require("graphql")

const {
  GraphQLObjectType, GraphQLString, GraphQLSchema,
  GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull,
  GraphQLBoolean
} = graphql

const Categories = require("../models/category")
const Products = require("../models/product")

const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: new GraphQLNonNull(GraphQLString) },
    price: { type: new GraphQLNonNull(GraphQLInt) },
    images: { type: new GraphQLList(GraphQLString) },
    category: {
      type: CategoryType,
      resolve({ categoryId }, args) {
        return Categories.findById(categoryId)
      }
    }
  })
})

const CategoryType = new GraphQLObjectType({
  name: "Category",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: new GraphQLNonNull(GraphQLString) },
    icons: { type: new GraphQLList(GraphQLString) },
    images: { type: new GraphQLList(GraphQLString) },
    category: {
      type: new GraphQLList(ProductType),
      resolve({ id }, args) {
        return Products.find({ categoryId: id })
      }
    }
  })
})

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addProduct: {
      type: ProductType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        price: { type: new GraphQLNonNull(GraphQLInt) },
        categoryId: { type: new GraphQLNonNull(GraphQLID) },
        images: { type: new GraphQLList(GraphQLString) }
      },
      resolve(parent, { name, price, categoryId, images, icon }) {
        const product = new Products({
          name, price, categoryId, images, icon
        })
        return product.save()
      }
    },
    updateProduct: {
      type: ProductType,
      args: {
        id: { type: GraphQLID },
        name: { type: new GraphQLNonNull(GraphQLString) },
        price: { type: new GraphQLNonNull(GraphQLInt) },
        categoryId: { type: new GraphQLNonNull(GraphQLID) },
        images: { type: new GraphQLList(GraphQLString) },
        icon: { type: GraphQLString }
      },
      resolve(parent, { id, name, price, categoryId, images, icon }) {
        return Products.findByIdAndUpdate(
          id,
          { $set: { name, price, categoryId, images, icon } },
          { new: true }
        )
      }
    },
    deleteProduct: {
      type: ProductType,
      args: { id: { type: GraphQLID } },
      resolve(parent, { id }) {
        return Products.findByIdAndRemove(id)
      }
    }
  }
})

const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    productById: {
      type: ProductType,
      args: { id: { type: GraphQLID } },
      resolve(parent, { id }) {
        return Products.findById(id)
      }
    },
    productByName: {
      type: new GraphQLList(ProductType),
      args: { name: { type: GraphQLString } },
      resolve(parent, { name }) {
        return Products.find({ name: { $regex: name, $options: "i" } })
      }
    },
    categoryById: {
      type: CategoryType,
      args: { id: { type: GraphQLID } },
      resolve(parent, { id }) {
        return Categories.findById(id)
      }
    },
    productsAll: {
      type: new GraphQLList(ProductType),
      resolve: () => Products.find({})
    },

    categoryByName: {
      type: new GraphQLList(CategoryType),
      args: { name: { type: GraphQLString } },
      resolve(parent, { name }) {
        return Categories.find({ name: { $regex: name, $options: "i" } })
      }
    },
    categoriesAll: {
      type: new GraphQLList(CategoryType),
      resolve: () => Categories.find({})
    },
    categoriesByListNames: {
      type: new GraphQLList(CategoryType),
      args: { names: { type: new GraphQLList(GraphQLString) } },
      resolve(parent, { names }) {
        return Categories.find({ name: { $in: names } })
      }
    }
    // products: {
    //   type: new GraphQLList(ProductType),
    //   args: {name: {type: GraphQLString}},
    //   resolve(parent, {name}) {
    //     return Products.find({name: {$regex: name, $options: "i"}});
    //   },
    // },

    // categories: {
    //   type: new GraphQLList(CategoryType),
    //   args: {name: {type: GraphQLString}},
    //   resolve(parent, {name}) {
    //     return Categories.find({name: {$regex: name, $options: "i"}});
    //   },
    // },
  }
})

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation
})