const Sequelize = require('sequelize');

class Diary extends Sequelize.Model {
    static initiate(sequelize) {
        Diary.init({
            content: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW,
            },
        }, {
            sequelize,
            timestamps: true, // createdAt과 updatedAt 컬럼을 자동으로 추가
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            underscored: false,
            modelName: 'Diary',
            tableName: 'diaries',
            paranoid: true, // deletedAt 컬럼을 추가하여 soft delete를 지원
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }

    static associate(db) {}
};

module.exports = Diary;