import { Request, Response, NextFunction } from 'express';

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    return req.user
        ? next()
        : res.status(403).send({ msg: 'Forbidden' });
};
