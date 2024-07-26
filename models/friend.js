const Sequelize = require("sequelize");

class Friend extends Sequelize.Model {
  static initiate(sequelize) {
    Friend.init(
      {
        user_id: Sequelize.INTEGER,
        friend_id: Sequelize.INTEGER,
        status: {
          type: Sequelize.ENUM(["pending", "accepted"]),
          defaultValue: "pending",
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "User",
        tableName: "users",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {}
}

module.exports = Friend;
