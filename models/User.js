const BaseModel = require("./BaseModel");
var sequelize = BaseModel.sequelize;
var Sequelize = BaseModel.Sequelize;

const User = sequelize.define('m_account_list', 
    {
        // attributes
        account_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement : true,
            allowNull: false,
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false
        },
        account_user: {
            type: Sequelize.STRING,
            allowNull: false
        },
        account_pass: {
            type: Sequelize.STRING,
            allowNull: false
        },
        address: {
            type: Sequelize.STRING,
            allowNull: true
        },
        contact_info: {
            type: Sequelize.STRING,
            allowNull: true
        },
        comment: {
            type: Sequelize.TEXT,
            allowNull: true
        },
        create_time: {
            type: Sequelize.DATE,
            allowNull: false
        },
        deleted: {
            type: Sequelize.SMALLINT,
            allowNull: false,
            defaultValue: 0
        }
    },
    {
        tableName: 'm_account_list',
        timestamps: false,
    }
);

module.exports = User;