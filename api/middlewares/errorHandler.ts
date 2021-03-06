/**
 * 错误处理
 */

import { Request, Response, NextFunction, Errback } from 'express'
// import httpStatus from 'http-status'
export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
    let { statusCode, message } = err;
    res.locals.errorMessage = err.message;

    const response = {
        code: statusCode,
        message,
        stack: err.stack,
    };

    // if (config.env === 'development') {
    console.error(err);
    // }

    res.status(statusCode).send(response);
}