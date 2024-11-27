import Joi from "joi";

const signup = Joi.object({
  email: Joi.string().email().label("email").trim().lowercase().required(),
  password: Joi.string().label("password").required(),
  name: Joi.string().label("name").required(),
  code: Joi.number().label("code").required(),
  department_id: Joi.number().label("department_id").required(),
  designation_id: Joi.number().label("designation_id").required(),
});

const login = Joi.object({
  code: Joi.number().label("code").required(),
  password: Joi.string().label("password").required(),
});

const verifyEmail = Joi.object({
  token: Joi.string().label("Token").required(),
});

const forgetPassword = Joi.object({
  email: Joi.string().label("email").trim().lowercase().required(),
});

const generateOtp = Joi.object({
  email: Joi.string().label("email").trim().lowercase().required(),
});

const logout = Joi.object({
  userId: Joi.string().label("userId").required(),
});

const resetPassword = Joi.object({
  password: Joi.string().label("password").required(),
  confirmPassword: Joi.string().label("confirmPassword").required(),
});
const updatePassword = Joi.object({
  oldPassword: Joi.string().label("oldPassword").required(),
  password: Joi.string().label("password").required(),
  confirmPassword: Joi.string().label("confirmPassword").required(),
});

export const authValidation = {
  signup,
  login,
  verifyEmail,
  forgetPassword,
  generateOtp,
  resetPassword,
  logout,
  updatePassword,
};
