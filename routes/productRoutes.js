const express = require("express");
const db = require("../util/databaseConnection");

const router = express.Router();

let products = [];

router.get("/", (req, res) => {
    const response = { success: true, message: "", params: {products}}
    res.json(response);
});

router.post("/product", (req, res) => {
    const newProduct = {idProduct: products.length + 1, ...req.body.params};
    products.push(newProduct);

    const response = {success: true, message: "", params: {}};
    res.json(response);
})

router.put("/product/:productId", (req, res) => {
    const idProduct = parseInt(req.params.productId);
    const updatedProduct = req.body.params;
    products = products.map(product => product.idProduct == idProduct ? {idProduct, ...updatedProduct} : product );
    
    const response = {success: true, message: "", params: {}};
    res.json(response);
})

router.delete("/product/:productId", (req, res) => {
    const idProductToBeDeleted = parseInt(req.params.productId);
    products = products.filter(product => product.idProduct !== idProductToBeDeleted);
    
    const response = {success: true, message: "", params: {}};
    res.json(response);
})

module.exports = router;