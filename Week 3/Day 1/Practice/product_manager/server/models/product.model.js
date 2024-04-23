const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "{PATH} is required"],
        minlength: [3, "{PATH} Must Have at Least 3 Characters"]
    },
    price: {
        type: Number,
        required: [true, "{PATH} is required"],
    },
    description: {
        type: String,
        required: [true, "{PATH} is required"],
        min: [20, "{PATH}  Must Have at Least 20 Characters"]
    }
}, { timestamps: true });

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
