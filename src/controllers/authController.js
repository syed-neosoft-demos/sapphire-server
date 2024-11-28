import { response } from "../utils/appResponse.js";
import { registrationMail } from "../utils/email.js";
import { hashPassword, verifyPassword } from "../utils/password.js";
import { signJWT, verifyJWT } from "../utils/jwt.js";
import { employeeRepo } from "../repositories/employee.js";
import { ERROR_LOG } from "../utils/logger.js";
import { miscellaneousRepo } from "../repositories/miscellaneous.js";

export const signup = async (req, res) => {
  try {
    let { email, password, name, code, department_id, designation_id } =
      req.body;
    const isUser = await employeeRepo.getUserByEmailCode(email, code);
    if (isUser !== null) {
      return response.conflictResponse(res, "user already exist");
    }
    const hashPass = await hashPassword(password);
    const payload = {
      email,
      name,
      password: hashPass,
      code,
      department_id,
      designation_id,
    };
    const user = await employeeRepo.createUser(payload);
    const token = await signJWT({ id: user?.id }, "30m");

    registrationMail({
      email,
      fullName: name,
      url: `${process.env.SERVER_BASE_URL}/auth/verify?token=${token}`,
    });
    return response.successResponse(
      res,
      "account successfully created, check your mail to activate your account",
      { success: true }
    );
  } catch (error) {
    return response.internalErrorResponse(res, error?.message);
  }
};

export const verifyEmail = async (req, res) => {
  try {
    const { token } = req.query;
    const { id } = await verifyJWT(token);
    if (id) {
      const payload = {
        is_email_verified: true,
      };
      const condition = {
        where: {
          id: id,
        },
      };
      const user = await employeeRepo.updateUser(payload, condition);
      if (user?.modifiedCount > 0) {
        res
          .status(200)
          .send(
            '<h2 style="color:green; text-align:center;padding:30px;">Your account verification successful, Login & continue</h2>'
          );
      } else {
        res
          .status(200)
          .send(
            '<h2 style="color:green; text-align:center;padding:30px;">Your account verification already completed, Login & continue</h2>'
          );
      }
    }
  } catch (error) {
    ERROR_LOG(error?.message);
    res
      .status(200)
      .send(
        '<h2 style="color:red; text-align:center;padding:30px;">Something went wrong while verifying your account.</h2>'
      );
  }
};

export const login = async (req, res) => {
  try {
    const { code, password } = req.body;
    const user = await employeeRepo.getUserByEmpId(code);
    if (user === null) {
      return response.validationErrorResponse(
        res,
        "Employee id or password is not valid"
      );
    }
    if (!user?.is_email_verified) {
      return response.validationErrorResponse(
        res,
        "Your account is not activated"
      );
    }
    const isValid = await verifyPassword(password, user.password);
    if (isValid) {
      const accessToken = await signJWT(
        {
          id: user?.id,
          role: user?.role ?? "USER",
        },
        "2h"
      );

      return response.successResponse(res, "success", {
        accessToken: accessToken,
      });
    } else {
      return response.validationErrorResponse(
        res,
        "Email id or password is not valid"
      );
    }
  } catch (error) {
    return response.internalErrorResponse(res, error?.message);
  }
};

export const getDepartment = async (req, res) => {
  try {
    const department = await miscellaneousRepo.getDepartment();
    return response.successResponse(res, "department list", {
      success: true,
      department,
    });
  } catch (error) {
    return response.internalErrorResponse(res, error?.message);
  }
};

export const getDesignation = async (req, res) => {
  try {
    const designation = await miscellaneousRepo.getDesignation();
    return response.successResponse(res, "designation list", {
      success: true,
      designation,
    });
  } catch (error) {
    return response.internalErrorResponse(res, error?.message);
  }
};
