import { Response, NextFunction } from 'express';
import { UserInfoRequest } from '../types/requests';

const jwt = require('jsonwebtoken');

export default async (request: UserInfoRequest, response: Response, next: NextFunction) => {
  const jwtToken = request.header('token');
  if (!jwtToken) {
    next();
  }

  const secret: string = process.env.SECRET || '';
  try {
    const payload = jwt.verify(jwtToken, secret);
    request.userId = payload.userId;
    next();
  } catch (err) {
    response.status(401).json(err);
  }
};
