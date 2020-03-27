const express = require("express")
const graphqlHTTP = require("express-graphql")
const schema = require("../schema/schema")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
const PORT = process.env.PORT || 3005
// mongoose.connect('mongodb://localhost:27017/restockchicago', {useNewUrlParser: true})
// mongoose.connect('mongodb://user:123user@ds329668.mlab.com:29668/restockchicago', {useNewUrlParser: true})
mongoose.connect('mongodb://admin:123admin@ds329668.mlab.com:29668/restockchicago', {useNewUrlParser: true})

app.use(cors())

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}))

const dbConnection = mongoose.connection;
dbConnection.on("error", err => {
  console.log(`Connection error: ${err}`)
})

dbConnection.once("open", () => {
  console.log("Connected to DB")
})

app.listen(PORT, err => {
  err ? console.log(err) : console.log(`The server is running at http://localhost:${PORT}/graphql`)
})