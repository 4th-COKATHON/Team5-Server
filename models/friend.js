const Sequelize = require("sequelize");

class Friend extends Sequelize.Model {
  static initiate(sequelize) {
    Friend.init(
      {
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "Users", // References the 'Users' table
            key: "id",
          },
        },
        friend_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "Users", // References the 'Users' table
            key: "id",
          },
        },
        status: {
          type: Sequelize.ENUM("pending", "accepted"),
          allowNull: false,
          defaultValue: "pending",
        },
      },
      {
        sequelize,
        timestamps: true, // createdAt과 updatedAt 컬럼을 자동으로 추가
        underscored: false,
        modelName: "Friend",
        tableName: "friends",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.Friend.belongsTo(db.User, {
      foreignKey: "user_id",
      targetKey: "id",
      as: "User",
    });
    db.Friend.belongsTo(db.User, {
      foreignKey: "friend_id",
      targetKey: "id",
      as: "Friend",
    });
  }
}

module.exports = Friend;
