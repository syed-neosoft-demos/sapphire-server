const appError = (error, req, res, next) => {
  if (process.env.NODE_ENV === "production") {
    //log error
    res.status(500).send(error?.message);
  } else {
    console.log("error", error?.message);
    res.status(500).send({ msg: error?.message, stack: error?.stack });
  }
  next();
};
export default appError;
