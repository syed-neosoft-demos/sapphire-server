import employeeModel from "../models/employeeModel.js";
import { Op } from "sequelize";
import { Designation, Employee } from "../models/index.js";

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

const getUserByIdAssociation = async (id) => {
  const emp = await Employee.findOne({
    where: { id: id },
    include: [
      {
        model: Designation,
        as: "designation",
        attributes: ["id", "name", "max_claim"],
      },
    ],
  });
  return emp.toJSON();
};

export const employeeRepo = {
  getUserById,
  getUserByEmpId,
  getUserByEmail,
  getUserByEmailCode,
  createUser,
  updateUser,
  getUserByIdAssociation,
};
