import Department from "../models/departmentModel.js";
import Designation from "../models/designationModel.js";
import ExpenseCategory from "../models/expenseCategoryModel.js";
import ExpenseSubCategory from "../models/expenseSubCategoryModel.js";
// import Location from "../models/locationModel.js";
import ClaimCategory from "../models/claimCategoryModel.js";
// import Claim from "../models/claimModel.js";
import { Claim, Location } from "../models/index.js";

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

const createClaimCategoryRelation = async (payload) => {
  const claimCategory = await ClaimCategory.bulkCreate(payload);
  return claimCategory;
};

const getClaim = async (id, limit = 10, skip = 0) => {
  // const claimCategory = await Claim.findAndCountAll(
  //   { where: { employee_id: id } },
  //   { limit: limit, offset: skip }
  // );
  // return claimCategory;
  const emp = await Claim.findAndCountAll({
    where: { employee_id: id },
    limit: limit,
    offset: skip,
    include: [
      {
        model: Location,
        attributes: ["name"],
      },
    ],
  });
  return emp;
};

const getTotalClaim = async (id) => {
  const totalClaim = await Claim.sum("claim_amount", {
    where: { employee_id: id },
  });
  return totalClaim;
};

export const miscellaneousRepo = {
  getCategory,
  getLocation,
  getDepartment,
  getDesignation,
  getSubCategory,
  createClaimCategoryRelation,
  getClaim,
  getTotalClaim,
};
