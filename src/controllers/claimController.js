import { claimRepo } from "../repositories/claim.js";
import { response } from "../utils/appResponse.js";
import { miscellaneousRepo } from "../repositories/miscellaneous.js";
import cloudinary from "../config/cloudinaryConfig.js";

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

export const fileUpload = async (req, res) => {
  try {
    console.log("req.file.path :>> ", req.file.path);
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "bills", // Optional: Organize uploads into a folder
    });
    return response.successResponse(res, "category of expenses", {
      success: true,
      result: { url: result.secure_url, public_id: result.public_id },
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
    const claimCategoryPayload = expense_sub_category_id.map((el) => ({
      claim_id: claim.id,
      expense_sub_category_id: el,
    }));

    await miscellaneousRepo.createClaimCategoryRelation(claimCategoryPayload);
    return response.successResponse(res, "claim form successfully submit", {
      success: true,
      claim,
    });
  } catch (error) {
    console.log("error :>> ", error);
    return response.internalErrorResponse(res, error?.message);
  }
};

export const getClaim = async (req, res) => {
  try {
    const id = req.headers.userId;
    const claim = await miscellaneousRepo.getClaim(id, 2, 0);
    return response.successResponse(res, "category of expenses", {
      success: true,
      claim,
    });
  } catch (error) {
    console.log("error :>> ", error);
    return response.internalErrorResponse(res, error?.message);
  }
};

export const getCountForDashboard = async (req, res) => {
  try {
    const id = req.headers.userId;
    const totalClaim = await miscellaneousRepo.getTotalClaim(id);
    return response.successResponse(res, "totalClaim fetch successful", {
      success: true,
      count: { totalClaim },
    });
  } catch (error) {
    return response.internalErrorResponse(res, error?.message);
  }
};
