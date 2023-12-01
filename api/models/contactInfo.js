"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Contact_infos extends Model {
    
    static associate(models) {
      Contact_infos.belongsTo(models.Users, { foreignKey: "user_id" });
    }
  }

  Contact_infos.init(
    {
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      dob: DataTypes.DATE,
      address: DataTypes.STRING,
      zip_code: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
        },
        references: {
          model: "Users",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Contact_infos",
      timestamps: true,
    }
  );
  return Contact_infos;
};
