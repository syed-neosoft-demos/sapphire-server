import claimModel from "../models/claimModel.js";

const createClaim = async (payload) => {
  const user = await claimModel.create(payload);
  return user;
};

export const claimRepo = {
  createClaim,
};
