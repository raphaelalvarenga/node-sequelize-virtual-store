const express = require("express");
const bodyParser = require("body-parser");
const productRoutes = require("./routes/productRoutes");
const path = require("path");

const app = express();

app.use(bodyParser.json());

app.use(productRoutes);

app.use(express.static(path.join("public")));

app.use("/add-file", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "add-file.html"));
})

app.use("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "shop.html"));
})

app.listen(3000, () => console.log("Porta 3000 funcionando..."));