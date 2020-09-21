const Sequelize = require("sequelize");
const sequelize = require("../util/databaseConnection");

const Product = sequelize.define("product", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    description: Sequelize.STRING,

    price: {
        type: Sequelize.DOUBLE,
        allowNull: true
    },

    imageUrl: Sequelize.STRING
})

module.exports = Product;