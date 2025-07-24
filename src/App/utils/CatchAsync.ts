import { NextFunction, Request, RequestHandler, Response } from "express";

const CatchAsync = ( func: RequestHandler ) => {
    return ( req: Request, res: Response, next: NextFunction ) => {
        Promise.resolve(func(req, res, next)).catch(( error ) => {
            // console.log(error);
            next(error);
        })
    }
}

export default CatchAsync;