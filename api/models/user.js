"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  /**
   * Represents a user in the system.
   * @class
   * @extends Model
   */
  class Users extends Model {
    static associate(models) {
      Users.hasOne(models.Contact_infos, { foreignKey: "user_id" });
      Users.hasMany(models.Experiences, { foreignKey: "user_id" });
    }

    getFullName() {
      return `${this.first_name} ${this.last_name}`;
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
        set(value) {
          this.setDataValue("first_name", value.trim());
        },
        get() {
          const rawValue = this.getDataValue("first_name");
          return rawValue ? rawValue : null;
        },
      },
      last_name: {
        type: DataTypes.STRING,
        validate: {
          len: [2, 100],
          notEmpty: true,
        },
        set(value) {
          this.setDataValue("last_name", value.trim());
        },
        get() {
          const rawValue = this.getDataValue("last_name");
          return rawValue ? rawValue : null;
        },
      },
      gender: {
        type: DataTypes.STRING,
        set(value) {
          this.setDataValue("gender", value.trim());
        },
        get() {
          return this.getDataValue("gender");
        },
      },
      bio: {
        type: DataTypes.TEXT,
        set(value) {
          this.setDataValue("bio", value.trim());
        },
        get() {
          return this.getDataValue("bio");
        },
      },
      class_year: {
        type: DataTypes.INTEGER,
        set(value) {
          this.setDataValue("class_year", value);
        },
        get() {
          return this.getDataValue("class_year");
        },
      },
      practice_area: {
        type: DataTypes.STRING,
        set(value) {
          this.setDataValue("practice_area", value.trim());
        },
        get() {
          return this.getDataValue("practice_area");
        },
      },
      pp_img_path: {
        type: DataTypes.STRING,
        set(value) {
          this.setDataValue("pp_img_path", value.trim());
        },
        get() {
          return this.getDataValue("pp_img_path");
        },
      },
      cover_img_path: {
        type: DataTypes.STRING,
        set(value) {
          this.setDataValue("cover_img_path", value.trim());
        },
        get() {
          return this.getDataValue("cover_img_path");
        },
      },
      cv_path: {
        type: DataTypes.STRING,
        set(value) {
          this.setDataValue("cv_path", value.trim());
        },
        get() {
          return this.getDataValue("cv_path");
        },
      },
      unique_identifier_number: {
        type: DataTypes.INTEGER,
        set(value) {
          this.setDataValue("unique_identifier_number", value);
        },
        get() {
          return this.getDataValue("unique_identifier_number");
        },
      },
      RE_email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          isEmail: true,
          notEmpty: true,
        },
        set(value) {
          this.setDataValue("RE_email", value.toLowerCase().trim());
        },
        get() {
          return this.getDataValue("RE_email");
        },
      },
      passwordHash: {
        type: DataTypes.STRING,
        get() {
          return this.getDataValue("passwordHash");
        },
      },
      password: {
        type: DataTypes.VIRTUAL,
        validate: {
          notEmpty: true,
          len: [8, 100],
        },
        set(value) {
          this.setDataValue("password", value);
        },
        get() {
          return this.getDataValue("password");
        },
      },
    },
    {
      sequelize,
      modelName: "Users",
      timestamps: true,
    }
  );

  Users.beforeCreate((user) => {
    if (user.password) {
      user.passwordHash = bcrypt.hashSync(user.password, 10);
    }else {
      throw new Error("Password is required");
    }
  });

  return Users;
};
