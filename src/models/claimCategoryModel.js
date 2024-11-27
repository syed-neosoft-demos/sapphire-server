import sequelize from "../config/sequelize.js";
import { DataTypes } from "sequelize";
import Claim from "./claimModel.js";
import ExpenseSubCategory from "./expenseSubCategoryModel.js";

const ClaimCategory = sequelize.define(
  "claims_categories",
  {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.BIGINT,
    },
    claim_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: Claim,
        key: "id",
      },
    },
    expense_sub_category_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: ExpenseSubCategory,
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

export default ClaimCategory;
