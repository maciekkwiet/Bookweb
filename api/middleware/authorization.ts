import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

module.exports = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const jwtToken = request.header('token');

    if (!jwtToken) {
      return response.status(403).json('Not authorize');
    }

    const payload = jwt.verify(jwtToken, process.env.SECRET);

    request.user = payload.user;
    next();
  } catch (err) {
    console.error(err.message);
    return response.status(403).json('Not authorize');
  }
};
