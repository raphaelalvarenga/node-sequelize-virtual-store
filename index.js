const express = require("express");
const bodyParser = require("body-parser");
const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(bodyParser.json());

app.use(productRoutes);

app.listen(3000, () => console.log("Porta 3000 funcionando..."));