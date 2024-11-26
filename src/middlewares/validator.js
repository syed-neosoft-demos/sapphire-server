import { response } from "../utils/appResponse.js";

const validator = (schema, path) => {
  return (req, res, next) => {
    const { error } = schema.validate(req[path]);
    if (error) {
      const msg = error?.message;
      return response.validationErrorResponse(res, msg?.replaceAll('"', ""));
    }
    next();
  };
};

export default validator;
