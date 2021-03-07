import { NextFunction, Response, Request } from 'express';

function asyncMiddleware(handler: Function) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await handler(req, res);
    } catch (ex) {
      next(ex);
    }
  };
}

export default asyncMiddleware;
