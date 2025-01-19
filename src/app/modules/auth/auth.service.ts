import { generateHashPassword } from "../../../lib/generateHashPassword";
import CustomError from "../../../utils/CustomError";
import { User } from "../user/user.model";
import { IAuth } from "./auth.interface";
import jwt from "jsonwebtoken";

const register = async (payload: IAuth) => {
	const checkUser = await User.findById(payload.email);

	if (checkUser) {
		throw new CustomError(302, "User already exists!");
	}

	const hashPassword = generateHashPassword(payload.password);

	const user = await User.create({
		...payload,
		password: hashPassword,
	});

	return user;
};
