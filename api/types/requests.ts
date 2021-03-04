import { Request } from 'express';

export interface UserInfoRequest extends Request {
  userId: number;
}
