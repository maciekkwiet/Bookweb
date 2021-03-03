import { Response, NextFunction } from 'express';
import { UserInfoRequest } from './requests';

const jwt = require('jsonwebtoken');

export default async (request: UserInfoRequest, response: Response, next: NextFunction) => {
  const jwtToken = request.header('token');
  if (!jwtToken) {
    next();
  }

  const secret: string = process.env.SECRET || '';
  try {
    const payload = jwt.verify(jwtToken, secret);
    request.user = payload.user;
    next();
  } catch (err) {
    response.status(401).json(err);
  }
};
