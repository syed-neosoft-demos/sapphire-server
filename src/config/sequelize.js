import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "mssql",
  logging: console.log, //process.env.NODE_ENV === "development" ? false : console.log,
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PROT,
});

export default sequelize;
