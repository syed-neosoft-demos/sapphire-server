import sequelize from "../config/sequelize.js";
import { DataTypes } from "sequelize";

const ExpenseCategory = sequelize.define(
  "expense_categories",
  {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.BIGINT,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
    },
  },
  {
    timeStamps: true,
    freezeTableName: true,
    paranoid: true,
  }
);

export default ExpenseCategory;
