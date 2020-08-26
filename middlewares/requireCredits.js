module.exports = (req, res, next) => {
    if (req.user.credits < 1 ) {
      return res.staus(403).send({ error: "You dont have enough credits" });
    }
    next();
  };