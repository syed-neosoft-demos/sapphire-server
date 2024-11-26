import jwt from "jsonwebtoken";

export const signJWT = async (payload, time = "1h") => {
  return await jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: time,
  });
};

export const verifyJWT = async (token) => {
  return await jwt.verify(token, process.env.JWT_SECRET);
};

export const signRefreshJWT = async (payload, time = "7d") => {
  return await jwt.sign(payload, process.env.REFRESH_JWT_SECRET, {
    expiresIn: time,
  });
};

export const verifyRefreshJWT = async (token) => {
  return await jwt.verify(token, process.env.REFRESH_JWT_SECRET);
};
