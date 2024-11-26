import employeeModel from "../models/employeeModel.js";
import { Op } from "sequelize";

const getUserById = async (id) => {
  const user = await employeeModel.findOne({
    where: { id: id },
  });
  return user;
};

const getUserByEmpId = async (id) => {
  const user = await employeeModel.findOne({
    where: { code: id },
  });
  return user;
};

const getUserByEmail = async (id) => {
  const user = await employeeModel.findOne({
    where: { code: id },
  });
  return user;
};

const getUserByEmailCode = async (email, code) => {
  const user = await employeeModel.findOne({
    where: { [Op.or]: [{ code: code }, { email: email }] },
  });
  return user;
};

const createUser = async (payload) => {
  const user = await employeeModel.create(payload);
  return user;
};

const updateUser = async (payload, condition) => {
  const user = await employeeModel.update({ ...payload }, { ...condition });
  return user;
};

export const employeeRepo = {
  getUserById,
  getUserByEmpId,
  getUserByEmail,
  getUserByEmailCode,
  createUser,
  updateUser,
};
