import { Request, Response } from "express";
import handleAsync from "../../../utils/handleAsync";
import { userServices } from "../user/user.service";
import { authServices } from "./auth.service";
import sendResponse from "../../../utils/sendResponse";

const register = handleAsync(async (req: Request, res: Response) => {
	const result = await authServices.register(req.body);

	sendResponse(res, {
		statusCode: 200,
		message: "User registered successfully",
		result: result,
	});
});
const login = handleAsync(async (req: Request, res: Response) => {
	const result = await authServices.login(req.body);

	sendResponse(res, {
		statusCode: 200,
		message: "User logged in successfully",
		result: result,
	});
});

export const authController = { register, login };
