import express from "express";
import {
  getDepartment,
  getDesignation,
  login,
  signup,
  verifyEmail,
} from "../controllers/authController.js";
import { authValidation } from "../validations/authValidation.js";
import validate from "../middlewares/validator.js";

const router = express.Router();

router.get("/get-department", getDepartment);
router.get("/get-designation", getDesignation);
router.post("/signup", validate(authValidation.signup, "body"), signup);
router.get(
  "/verify",
  validate(authValidation.verifyEmail, "query"),
  verifyEmail
);
router.post("/login", validate(authValidation.login, "body"), login);

export default router;
