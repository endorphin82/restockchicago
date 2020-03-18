const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: String,
    icons: [String],
    images: [String]
});

module.exports = mongoose.model("category", categorySchema);