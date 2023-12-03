"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    
    static associate(models) {
      Users.hasOne(models.Contact_infos, { foreignKey: "user_id" });
      Users.hasMany(models.Experiences, { foreignKey: "user_id" });
    }
  }

  Users.init(
    {
      first_name: {
        type: DataTypes.STRING,
        validate: {
          len: [2, 100],
          notEmpty: true,
        },
      },
      last_name: {
        type: DataTypes.STRING,
        validate: {
          len: [2, 100],
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
      modelName: "Users",
      timestamps: true,
    }
  );
  return Users;
};
