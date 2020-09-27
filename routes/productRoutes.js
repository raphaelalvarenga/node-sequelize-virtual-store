const express = require("express");
const Product = require("../models/productModel");

const router = express.Router();

router.get("/", (req, res) => {
    Product
        .findAll()
        .then(result => {
            const products = result.map(product => product.dataValues);
            const response = { success: true, message: "", params: {products}}
            console.log(response.params);
            // res.json(response);
            res.render("shop", {response});
        })
        .catch(error => {
            const response = { success: false, message: error.errors[0].message, params: {}}
            res.json(response);
        });
});

router.get("/products/:productId", (req, res) => {
    const productId = parseInt(req.params.productId);

    Product
        .findByPk(productId)
        .then(result => {
            const product = result.dataValues;
            const response = { success: true, message: "", params: {product}}
            res.json(response);
        })
        .catch(error => {
            const response = { success: false, message: error.errors[0].message, params: {}}
            res.json(response);
        });
})

router.get("/add-product", (req, res) => {
    res.render("add-product");
})

router.post("/product", (req, res) => {
    const { name, description, price } = req.body;
    const imageUrl = req.file ? req.file.path.replace("public/", "") : "images/shopping-cart.png";

    const newProduct = {name, description, price, imageUrl};

    Product
        .create(newProduct)
        .then(result => {
            const response = {success: true, message: "", params: {}};
            res.redirect("/");
        })
        .catch(error => {
            const errorMessage = error.errors[0].message;
            const response = {success: false, message: errorMessage, params: {}}
            res.redirect("/");
        });
})

router.put("/product/:productId", (req, res) => {

    Product
        .update(req.body.params, {where: {id: parseInt(req.params.productId)}})
        .then(result => {
            const response = {success: true, message: "", params: {}};
            res.json(response);
        })
        .catch(error => {
            const response = {success: false, message: error.errors[0].message, params: {}};
            res.json(response);
        })
    
})

router.delete("/product/:productId", (req, res) => {
    const idProductToBeDeleted = parseInt(req.params.productId);
    
    Product
        .destroy({where: {id: idProductToBeDeleted}})
        .then(result => {
            const response = {success: true, message: "", params: {}};
            res.json(response);
        })
        .catch(error => {
            const response = {success: false, message: error.errors[0].message, params: {}};
            res.json(response);
        })
})

module.exports = router;