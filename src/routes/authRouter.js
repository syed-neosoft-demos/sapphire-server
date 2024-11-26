import express from "express";
import { signup } from "../controllers/authController.js";
import { authValidation } from "../validations/authValidation.js";
import validate from "../middlewares/validator.js";

const router = express.Router();

router.post("/signup", validate(authValidation.generateOtp, "body"), signup);

export default router;
