"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Experience extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Experience.belongsTo(models.User, { foreignKey: "user_id" });
      Experience.belongsTo(models.Employer, { foreignKey: "employer_id" });
    }
  }
  Experience.init(
    {
      position: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          len: [3, 100],
          notEmpty: true,
        },
      },
      description: DataTypes.STRING,
      start_date: {
        allowNull: false,
        type: DataTypes.DATE,
        validate: {
          notEmpty: true,
        },
      },
      end_date: DataTypes.DATE,
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
        },
        references: {
          model: "User",
          key: "id",
        },
      },
      employer_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
        },
        references: {
          model: "Employer",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Experience",
    }
  );
  return Experience;
};
