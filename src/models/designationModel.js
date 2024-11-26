import sequelize from "../config/sequelize.js";
import { DataTypes } from "sequelize";

const Designation = sequelize.define(
  "designations",
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
    max_claim: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timeStamps: true,
    freezeTableName: true,
    paranoid: true,
  }
);

export default Designation;
