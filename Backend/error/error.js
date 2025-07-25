class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
}


export const errorMiddleware = (err, req, res, next) => {
    err.statusCode =err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

   return res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
}
export default ErrorHandler;