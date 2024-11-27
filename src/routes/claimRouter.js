import express from "express";
import {
  claim,
  getCategory,
  getLocation,
  getSubCategory,
} from "../controllers/claimController.js";
import { claimValidation } from "../validations/claimValidation.js";
import validate from "../middlewares/validator.js";
import { handleAuth } from "../middlewares/handleAuth.js";

const router = express.Router();

router.get("/get-category", handleAuth, getCategory);
router.get("/get-location", handleAuth, getLocation);
router.get(
  "/get-sub-category/:id",
  validate(claimValidation.paramId, "params"),
  handleAuth,
  getSubCategory
);

router.post("/create", validate(claimValidation.create, "body"), claim);

export default router;
