import { verifyJWT } from "../utils/jwt.js";
import { response } from "../utils/appResponse.js";

export const handleAuth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const token = authorization?.split(" ")?.[1];
    if (!token) {
      return response.unauthorizedResponse(res, "Token not found");
    }
    const isValid = await verifyJWT(token);
    if (isValid?.id) {
      req.headers.userId = isValid?.id;
      next();
    } else {
      return response.unauthorizedResponse(res, "Token verification error");
    }
  } catch (error) {
    return response.unauthorizedResponse(
      res,
      error?.message ?? "Token verification error"
    );
  }
};
