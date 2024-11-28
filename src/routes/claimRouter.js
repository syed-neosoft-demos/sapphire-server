import express from "express";
import {
  claim,
  fileUpload,
  getCategory,
  getClaim,
  getCountForDashboard,
  getLocation,
  getSubCategory,
} from "../controllers/claimController.js";
import { claimValidation } from "../validations/claimValidation.js";
import validate from "../middlewares/validator.js";
import { handleAuth } from "../middlewares/handleAuth.js";
import upload from "../config/multerConfig.js";

const router = express.Router();

router.get("/get-category", handleAuth, getCategory);
router.get("/get-location", handleAuth, getLocation);
router.get("/get-counts", handleAuth, getCountForDashboard);
router.get(
  "/get-claim",
  handleAuth,
  validate(claimValidation.pageNumber, "query"),
  getClaim
);
router.get(
  "/get-sub-category/:id",
  validate(claimValidation.paramId, "params"),
  handleAuth,
  getSubCategory
);
router.post("/bill-upload", handleAuth, upload.single("file"), fileUpload);
router.post(
  "/create",
  handleAuth,
  validate(claimValidation.create, "body"),
  claim
);

export default router;
