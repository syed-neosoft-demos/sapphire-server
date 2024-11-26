import { INFO_LOG } from './logger.js';

const responseStatus = {
  SUCCESS: 200,
  NO_CONTENT: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  NOT_ALLOWED: 405,
  CONFLICT: 409,
  VALIDATION: 422,
  INTERNAL_ERROR: 500,
};

const appResponse = (res, statusCode, message, data) => {
  INFO_LOG(res.requestId, { message, data, statusCode });
  return res.status(statusCode).json({
    data: data,
    message: message,
    requestId: res?.requestId,
  });
};

const notFoundResponse = (res, message = 'Not Found') => {
  return appResponse(res, responseStatus.NOT_FOUND, message);
};

const internalErrorResponse = (res, message = 'unknown error occurred') => {
  return appResponse(res, responseStatus.INTERNAL_ERROR, message);
};

const badRequestResponse = (res, message = 'unknown error occurred') => {
  return appResponse(res, responseStatus.BAD_REQUEST, message);
};
const unauthorizedResponse = (res, message) => {
  return appResponse(res, responseStatus.UNAUTHORIZED, message);
};

const successResponse = (res, message, data) => {
  return appResponse(res, responseStatus.SUCCESS, message, data);
};

const noContentResponse = (res, message) => {
  return appResponse(res, responseStatus.NO_CONTENT, message);
};

const validationErrorResponse = (res, message) => {
  return appResponse(res, responseStatus.VALIDATION, message);
};

const methodNotAllowed = (res, message) => {
  return appResponse(res, responseStatus.NOT_ALLOWED, message);
};

const conflictResponse = (res, message) => {
  return appResponse(res, responseStatus.CONFLICT, message);
};

export const response = {
  notFoundResponse,
  internalErrorResponse,
  badRequestResponse,
  unauthorizedResponse,
  successResponse,
  noContentResponse,
  validationErrorResponse,
  methodNotAllowed,
  conflictResponse,
};
