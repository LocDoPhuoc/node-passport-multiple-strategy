const Sequelize = require("sequelize");
const config = process.env;

// Connect to DB by Sequelize
const sequelize = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASSWORD, {
    host: config.DB_HOST,
    dialect: config.DB_DRIVER
});

module.exports = {
    sequelize: sequelize,
    Sequelize: Sequelize
}


