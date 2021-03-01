import { NextFunction, Request, Response } from 'express';

module.exports = function (err: Error, req: Request, res: Response, next: NextFunction) {
  console.log(err);
  res.status(500).json({
    message: 'Something failed..',
    error: err.message,
  });
};
