import sequelize from "../config/sequelize.js";
import { DataTypes } from "sequelize";
import Employee from "./employeeModel.js";
import Location from "./locationModel.js";

const Claim = sequelize.define(
  "claims",
  {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.BIGINT,
    },
    employee_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: Employee,
        key: "id",
      },
    },
    claim_amount: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
    },
    expense_date: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
    },
    expense_location_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: Location,
        key: "id",
      },
    },
    bill_url: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: false,
    },
    remark: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    timeStamps: true,
    freezeTableName: true,
    paranoid: true,
  }
);

export default Claim;
