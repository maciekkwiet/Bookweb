const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res, next) => {
  try {
    const jwToken = req.header("token");

    if (!jwToken) {
      return res.status(404).json("Not authorize");
    }

    const payload = jwt.verify(jwToken, process.env.jwtSecret);

    req.user = payload.user;
  } catch (err) {
    console.error(err.message);
    return res.status(401).json("Not authorize");
  }
};