const Product = require("../models/product.model");

module.exports = {
    // READ ALL
    AllProducts: (req, res) => {
        Product.find()
            .then((allProducts) => {
                console.log(allProducts);
                res.json(allProducts);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // READ ONE
    GetProduct: (req, res) => {
        const productId = req.params.id;
        Product.findById(productId)
            .then((product) => {
                if (!product) {
                    return res.status(404).json();
                }
                res.json(product);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // CREATE
    CreateProduct: (req, res) => {
        Product.create(req.body)
            .then((CreatedProduct) => {
                console.log(CreatedProduct);
                res.status(201).json(CreatedProduct);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // UPDATE
    UpdateProduct: (req, res) => {
        const productId = req.params.id;
        Product.findByIdAndUpdate(productId, req.body, { new: true })
            .then((updatedProduct) => {
                if (!updatedProduct) {
                    return res.status(404).json();
                }
                res.json(updatedProduct);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // DELETE
    DeleteProduct: (req, res) => {
        const productId = req.params.id;
        Product.findByIdAndDelete(productId)
            .then((deletedProduct) => {
                if (!deletedProduct) {
                    return res.status(404).json();
                }
                res.status(204).send();
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    }
};
