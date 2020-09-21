const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    "virtual_store",
    "root",
    "root",
    {
        dialect: "mysql",
        host: "localhost"
    }
);

module.exports = sequelize;