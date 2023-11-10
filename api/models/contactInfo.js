"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Contact_info extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Contact_info.belongsTo(models.User, { foreignKey: "user_id" });
    }
  }
  Contact_info.init(
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
          model: "User",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Contact_info",
    }
  );
  return Contact_info;
};
