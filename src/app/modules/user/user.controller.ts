import { Request, Response } from "express";
import handleAsync from "../../../utils/handleAsync";
import sendResponse from "../../../utils/sendResponse";
import { userServices } from "./user.service";

const createIntoDB = handleAsync(async (req: Request, res: Response) => {
	const result = await userServices.createIntoDB(req.body);

	sendResponse(res, {
		statusCode: 201,
		message: "Resume uploaded successfully",
		result: result,
	});
});

export const userControllers = { createIntoDB };
