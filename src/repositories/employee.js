import employeeModel from "../models/employeeModel.js";
import { Op } from "sequelize";

const getUser = async (key) => {
  const user = await employeeModel.find({
    where: {
      [Op.or]: [{ id: key }, { email: key }],
    },
  });
  return user;
};

const createUser = async (payload) => {
  const user = await employeeModel.create(payload);
  return user;
};

const updateUser = async (args) => {
  const user = await employeeModel.updateOne(args);
  return user;
};

export const employeeRepo = {
  getUser,
  createUser,
  updateUser,
};
