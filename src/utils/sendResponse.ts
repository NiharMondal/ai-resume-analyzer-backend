import { Response } from "express";

type TResponse<T> = {
	statusCode: number;
	message: string;
	result: T[] | T;
	meta?: {};
};

/**
 *
 * @param res Response
 * @param data Is a object that contains statusCode:number, message:string, result: Generic data, meta: is optional contains objects
 */

const sendResponse = <T>(res: Response, data: TResponse<T>) => {
	res.status(data.statusCode).json({
		success: true,
		message: data.message,
		meta: data.meta,
		result: data.result,
	});
};

export default sendResponse;
