import Department from "../models/departmentModel.js";
import Designation from "../models/designationModel.js";
import ExpenseCategory from "../models/expenseCategoryModel.js";
import ExpenseSubCategory from "../models/expenseSubCategoryModel.js";
import Location from "../models/locationModel.js";

const getCategory = async () => {
  const category = await ExpenseCategory.findAndCountAll(
    {},
    { limit: 100, offset: 0 }
  );
  return category;
};

const getLocation = async () => {
  const location = await Location.findAndCountAll(
    {},
    { limit: 100, offset: 0 }
  );
  return location;
};

const getDepartment = async () => {
  const location = await Department.findAndCountAll(
    {},
    { limit: 100, offset: 0 }
  );
  return location;
};

const getDesignation = async () => {
  const location = await Designation.findAndCountAll(
    {},
    { limit: 100, offset: 0 }
  );
  return location;
};

const getSubCategory = async (id) => {
  const category = await ExpenseSubCategory.findAndCountAll(
    { where: { expense_id: id } },
    { limit: 500, offset: 0 }
  );
  return category;
};

export const miscellaneousRepo = {
  getCategory,
  getLocation,
  getDepartment,
  getDesignation,
  getSubCategory,
};
