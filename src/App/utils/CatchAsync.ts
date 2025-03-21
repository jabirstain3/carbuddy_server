import { NextFunction, Request, RequestHandler, Response } from "express";

export const CatchAsync = ( func: RequestHandler ) => {
    return async ( req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(func(req, res, next)).catch(( error ): void => {
            // console.log(error);
            next(error);
        })
    }
}