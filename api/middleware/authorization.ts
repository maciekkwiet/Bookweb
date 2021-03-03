import { Response, NextFunction } from 'express';
import { UserInfoRequest } from './requests';

const jwt = require('jsonwebtoken');

module.exports = async (request: UserInfoRequest, response: Response, next: NextFunction) => {
  try {
    const jwtToken = request.header('token');

    if (!jwtToken) {
      return response.status(403).json('Not authorize');
    }

    const secret: string = process.env.SECRET || '';
    const payload = jwt.verify(jwtToken, secret);

    request.user = payload.user;
    next();
  } catch (err) {
    console.error(err.message);
    return response.status(403).json('Not authorize');
  }
};
