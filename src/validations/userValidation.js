import Joi from 'joi';

const create = Joi.object({
  empId: Joi.string().label('empId').required(),
  email: Joi.string().label('email').trim().lowercase().required(),
  fullName: Joi.string().label('fullName').required(),
});

const userId = Joi.object({
  userId: Joi.string().label('userId').required(),
});
const pagination = Joi.object({
  page: Joi.number().positive().label('page').required(),
  size: Joi.number().positive().label('size').required(),
});

export const userValidation = {
  create,
  userId,
  pagination,
};
