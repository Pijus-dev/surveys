module.exports = (req, res, next) => {
  if (!req.user) {
    return res.staus(401).send({ error: "You have to login first" });
  }
  next();
};
