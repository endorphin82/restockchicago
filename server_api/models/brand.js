const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const brandSchema = new Schema({
    name: String
});

module.exports = mongoose.model("brand", brandSchema);