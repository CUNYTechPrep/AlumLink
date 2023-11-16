"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      // define association here
      User.hasOne(models.Contact_info, { foreignKey: "user_id" });
      User.hasMany(models.Experience, { foreignKey: "user_id" });
    }

    getFullname() {
      return [this.first_name, this.last_name].join(" ");
    }
  }
  User.init(
    {
      first_name: {
        type: DataTypes.STRING,
        validate: {
          len: [3, 100],
          notEmpty: true,
        },
      },
      last_name: {
        type: DataTypes.STRING,
        validate: {
          len: [3, 100],
          notEmpty: true,
        },
      },
      gender: { type: DataTypes.STRING },
      bio: { type: DataTypes.STRING },
      class_year: DataTypes.INTEGER,
      practice_area: { type: DataTypes.STRING },
      image_path: { type: DataTypes.STRING },
      cv_path: { type: DataTypes.STRING },
      unique_identifier_number: DataTypes.INTEGER,
      RE_email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          isEmail: true,
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
