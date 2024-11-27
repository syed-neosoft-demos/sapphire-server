import Joi from "joi";

const create = Joi.object({
  employee_id: Joi.number().label("employee_id").required(),
  claim_amount: Joi.number().label("claim_amount").required(),
  expense_date: Joi.date().label("expense_date").required(),
  expense_location_id: Joi.number().label("expense_location_id").required(),
  bill_url: Joi.string().label("bill_url").required(),
  remark: Joi.string().label("remark").required(),
});
const paramId = Joi.object({
  id: Joi.number().label("id").required(),
});

export const claimValidation = {
  create,
  paramId,
};
