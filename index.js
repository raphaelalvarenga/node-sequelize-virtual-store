const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Rota principal");
})

app.listen(3000, () => console.log("Porta 3000 funcionando..."));