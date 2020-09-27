const express = require("express");
const bodyParser = require("body-parser");
const productRoutes = require("./routes/productRoutes");
const path = require("path");
const multer = require("multer");
const { fileStorage, fileFilter } = require("./util/filesDefinitions");

const app = express();

// Global configuration value to get the templating engine
app.set("view engine", "ejs");

// Letting Express to know where the templating engine will dynamically print views. By default, it is the /view folder. I will still declare it here though
app.set("views", "views");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}))

app.use(multer({storage: fileStorage, fileFilter}).single("image"));

app.use(productRoutes);

app.use(express.static(path.join("public")));

// app.use("/add-product", (req, res) => {
//     res.sendFile(path.join(__dirname, "views", "add-product.html"));
// })

app.use((req, res) => {
    res.render("404");
});

app.listen(3000, () => console.log("Porta 3000 funcionando..."));