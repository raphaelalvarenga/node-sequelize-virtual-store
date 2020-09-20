const express = require("express");

const router = express.Router();

const products = [];

router.get("/", (req, res) => {
    res.send("Main route accessed!");
});

router.post("/product", (req, res) => {
    console.log(req.body.params)
    res.send("New product added!");
})

router.put("/product/:productId", (req, res) => {
    res.send(`Updated the product ${req.params.productId}!`);
})

router.delete("/product/:productId", (req, res) => {
    res.send(`Deleted the product ${req.params.productId}`);
})

module.exports = router;