const express = require("express");
const Product = require("../models/productModel");

const router = express.Router();

let products = [];

router.get("/products", (req, res) => {
    Product
        .findAll()
        .then(result => {
            const products = result.map(product => product.dataValues);
            const response = { success: true, message: "", params: {products}}
            res.json(response);
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

router.post("/product", (req, res) => {
    const newProduct = {...req.body.params};
    
    Product
        .create(newProduct)
        .then(result => {
            const response = {success: true, message: "", params: {}};
            res.json(response);
        })
        .catch(error => {
            const errorMessage = error.errors[0].message;
            const response = {success: false, message: errorMessage, params: {}}
            res.json(response);
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