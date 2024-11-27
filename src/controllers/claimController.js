import { claimRepo } from "../repositories/claim.js";
import { response } from "../utils/appResponse.js";
import { miscellaneousRepo } from "../repositories/miscellaneous.js";

export const getCategory = async (req, res) => {
  try {
    const category = await miscellaneousRepo.getCategory();
    return response.successResponse(res, "category of expenses", {
      success: true,
      category,
    });
  } catch (error) {
    console.log("error :>> ", error);
    return response.internalErrorResponse(res, error?.message);
  }
};

export const getLocation = async (req, res) => {
  try {
    const location = await miscellaneousRepo.getLocation();
    return response.successResponse(res, "location fetch successful", {
      success: true,
      location,
    });
  } catch (error) {
    console.log("error :>> ", error);
    return response.internalErrorResponse(res, error?.message);
  }
};

export const getSubCategory = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const category = await miscellaneousRepo.getSubCategory(id);
    return response.successResponse(res, "category of expenses", {
      success: true,
      category,
    });
  } catch (error) {
    console.log("error :>> ", error);
    return response.internalErrorResponse(res, error?.message);
  }
};

export const claim = async (req, res) => {
  try {
    let {
      employee_id,
      claim_amount,
      expense_date,
      expense_location_id,
      bill_url,
      remark,
      expense_sub_category_id,
    } = req.body;

    const payload = {
      employee_id,
      claim_amount,
      expense_date,
      expense_location_id,
      bill_url,
      remark,
    };
    const claim = await claimRepo.createClaim(payload);
    console.log("expense_sub_category_id :>> ", expense_sub_category_id);
    return response.successResponse(res, "claim form successfully submit", {
      success: true,
      claim,
    });
  } catch (error) {
    return response.internalErrorResponse(res, error?.message);
  }
};
