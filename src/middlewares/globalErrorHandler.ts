import { NextFunction, Request, Response } from "express";

const globalErrorHandler = (
	err: any,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const errorObj = {
		statusCode: err?.statusCode || 500,
		message: err?.message || "Global Error Message",
		errorDetails: err,
	};

	res.status(errorObj.statusCode).json({
		success: false,
		message: errorObj.message,
		errorDetails: errorObj.errorDetails,
	});
};

export default globalErrorHandler;
