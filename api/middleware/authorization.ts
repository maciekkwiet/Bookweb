import { Response, NextFunction } from 'express';
import { UserInfoRequest } from '../types/requests';

import { verify } from 'jsonwebtoken';

module.exports = async (request: UserInfoRequest, response: Response, next: NextFunction) => {
  try {
    const jwtToken = request.header('token');

    if (!jwtToken) {
      return response.status(403).json('Not authorize');
    }

    const secret: string | undefined = process.env.SECRET;
    if (typeof secret === 'string') {
      const payload = verify(jwtToken, secret);
      request.userId = (payload as any).user;
    }
    next();
  } catch (err) {
    console.error(err.message);
    return response.status(403).json('Not authorize');
  }
};
