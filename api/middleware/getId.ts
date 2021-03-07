import { Response, NextFunction } from 'express';
import { UserInfoRequest } from '../types/requests';

import { verify } from 'jsonwebtoken';

export default async (request: UserInfoRequest, response: Response, next: NextFunction) => {
  const jwtToken: string | undefined = request.header('token');
  if (jwtToken) {
    const secret: string | undefined = process.env.SECRET;
    if (secret) {
      try {
        const payload = verify(jwtToken, secret);
        request.userId = (payload as any).userId;
        next();
      } catch (err) {
        response.status(401).json(err);
      }
    }
  }
};
