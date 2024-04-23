const ProductControllers = require("../controllers/product.controllers");

module.exports = (app) => {
    // READ ALL
    app.get("/api/products", ProductControllers.AllProducts);

    // READ One
    app.get("/api/products/:id", ProductControllers.GetProduct);

    // CREATE
    app.post("/api/products", ProductControllers.CreateProduct);

    // UPDATE
    app.patch("/api/products/:id", ProductControllers.UpdateProduct);

    // DELETE
    app.delete("/api/products/:id", ProductControllers.DeleteProduct);
};
