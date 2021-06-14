const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: {
        type: String,
        required: [true, "Item need name"]
    },
    units: {
        type: Number,
        min: 1,
        max: 1000
    }
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;