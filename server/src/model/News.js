const { Model, DataTypes } = require("sequelize");

class News extends Model {
  static init(sequelize) {
    super.init(
      {
        title: DataTypes.STRING,
        desc: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: "News",
      }
    );
  }
}

module.exports = News