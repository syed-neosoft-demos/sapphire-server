import sequelize from "../config/sequelize.js";
import { DataTypes } from "sequelize";
import ExpenseCategory from "./expenseCategoryModel.js";

const ExpenseSubCategory = sequelize.define(
  "expense_sub_categories",
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
    expense_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: ExpenseCategory,
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

export default ExpenseSubCategory;
