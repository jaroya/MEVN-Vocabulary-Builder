const error_404_handler =(req,res,next) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
  next();
};

module.exports = error_404_handler;