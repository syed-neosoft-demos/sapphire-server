import sequelize from "../config/sequelize.js";
import { DataTypes } from "sequelize";
import Department from "./departmentModel.js";
import Designation from "./designationModel.js";

const Employee = sequelize.define(
  "employees",
  {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.BIGINT,
    },
    email: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false,
    },
    code: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: "",
    },
    is_email_verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    department_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: Department,
        key: "id",
      },
    },
    designation_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: Designation,
        key: "id",
      },
    },
  },
  {
    timeStamps: true,
    freezeTableName: true,
    paranoid: true,
  }
);

export default Employee;
