import jwt from 'jsonwebtoken';
require('dotenv').config();

module.exports = async (req: any, res: any, next: any) => {
  try {
    const jwtToken = req.header('token');

    if (!jwtToken) {
      return res.status(403).json('Not authorize');
    }

    const payload = jwt.verify(jwtToken, process.env.SECRET!);

    req.user = payload.user;
    next();
  } catch (err) {
    console.error(err.message + 'dupa');
    return res.status(403).json('Not authorize');
  }
};
