const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: String,
    icon: String,
    image: String
});

module.exports = mongoose.model("category", categorySchema);