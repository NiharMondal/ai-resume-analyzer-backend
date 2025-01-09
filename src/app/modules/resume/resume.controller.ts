import { Request, Response } from "express";
import handleAsync from "../../../utils/handleAsync";
import { resumeServices } from "./resume.service";
import sendResponse from "../../../utils/sendResponse";

const createIntoDB = handleAsync(async (req: Request, res: Response) => {
	const result = await resumeServices.createIntoDB(req.file);

	sendResponse(res, {
		statusCode: 201,
		message: "Resume uploaded successfully",
		result: result,
	});
});

export const resumeControllers = { createIntoDB };
