const Sequelize = require('sequelize');

class Bucketlist extends Sequelize.Model {
    static initiate(sequelize) {
        Bucketlist.init({
            title: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            user_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            }
        }, {
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'Bucketlist',
            tableName: 'bucketlists',
            paranoid: true,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }

    static associate(db) {}
};

module.exports = Bucketlist;