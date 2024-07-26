const Sequelize = require("sequelize");

class Diary extends Sequelize.Model {
  static initiate(sequelize) {
    Diary.init(
      {
        content: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        bucketlist_id: Sequelize.INTEGER,
        user_id: Sequelize.INTEGER,
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
      },
      {
        sequelize,
        timestamps: true, // createdAt과 updatedAt 컬럼을 자동으로 추가
        createdAt: "created_at",
        updatedAt: "updated_at",
        underscored: false,
        modelName: "Diary",
        tableName: "diaries",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.Diary.belongsTo(db.Bucketlist, {
      foreignKey: "bucketlist_id",
      targetKey: "id",
    });
    db.Diary.belongsTo(db.User, { foriegnKey: "user_id", targetKey: "id" });
  }
}

module.exports = Diary;
