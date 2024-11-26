import { response } from "../utils/appResponse.js";
import { registrationMail } from "../utils/email.js";
import { hashPassword, verifyPassword } from "../utils/password.js";
import { signJWT, verifyJWT } from "../utils/jwt.js";
import { employeeRepo } from "../repositories/employee.js";
import { ERROR_LOG } from "../utils/logger.js";

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

// export const forgetPassword = async (req, res) => {
//   try {
//     const { email } = req.body;
//     const user = await empService.getAnUser({ email: { $eq: email } });
//     if (user?.isBlock) {
//       return response.methodNotAllowed(
//         res,
//         "You are blocked, connect to admin"
//       );
//     }
//     if (!user?.isActive) {
//       return response.validationErrorResponse(
//         res,
//         "Your account is not activated"
//       );
//     }
//     if (user != null) {
//       const token = await signJWT({ id: user._id }, "30m");
//       await forgetPassEmail({
//         fullName: user.fullName,
//         email,
//         url: `${process.env.CLIENT_BASE_URL}/auth/reset?token=${token}`,
//       });
//       return response.successResponse(
//         res,
//         "Email successfully sent, check your mail",
//         {}
//       );
//     } else {
//       return response.notFoundResponse(res, "Email not found");
//     }
//   } catch (error) {
//     return response.internalErrorResponse(res, error?.message);
//   }
// };

// export const resetPassword = async (req, res) => {
//   try {
//     const { password } = req.body;
//     const { userId } = req.headers;
//     if (userId) {
//       const hashPass = await hashPassword(password);
//       const isActive = await empService.updateUserByKey(
//         { _id: userId },
//         { password: hashPass }
//       );
//       if (isActive?.modifiedCount > 0) {
//         return response.successResponse(
//           res,
//           "Password successfully updated",
//           {}
//         );
//       }
//     } else {
//       return response.validationErrorResponse(res, "Invalid token");
//     }
//   } catch (error) {
//     return response.internalErrorResponse(res, error?.message);
//   }
// };
