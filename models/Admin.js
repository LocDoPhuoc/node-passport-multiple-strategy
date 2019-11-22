const BaseModel = require("./BaseModel");
var sequelize = BaseModel.sequelize;
var Sequelize = BaseModel.Sequelize;

const Admin = sequelize.define('m_admin_account', 
    {
        // attributes
        admin_user: {
            type: Sequelize.STRING,
            primaryKey: true,
            allowNull: false,
        },
        admin_password: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    {
        tableName: 'm_admin_account',
        timestamps: false,
    }
);

module.exports = Admin;