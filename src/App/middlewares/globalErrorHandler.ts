/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from "express";

const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Internal Server Error!!!",
        error: process.env.NODE_ENV === "development" ? err : {},
    });
};

export default globalErrorHandler;