import { NextFunction, Request, Response } from 'express';
import * as winston from 'winston';

module.exports = function (err: Error, req: Request, res: Response, next: NextFunction) {
  winston.log('error', err.message);
  console.error(err);
  res.status(500).json({
    message: 'Something failed..',
    error: err.message,
  });
};
