const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: String,
    brandId: String
});

module.exports = mongoose.model("product", productSchema);