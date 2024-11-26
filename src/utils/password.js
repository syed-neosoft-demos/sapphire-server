import bcrypt from "bcrypt";

export const hashPassword = async (pass) => {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  return await bcrypt.hash(pass, salt);
};

export const verifyPassword = async (pass, hashPass) => {
  return await bcrypt.compare(pass, hashPass);
};
