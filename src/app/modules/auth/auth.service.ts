import CustomError from "../../../utils/CustomError";
import { User } from "../user/user.model";
import { IAuth } from "./auth.interface";
import { bcryptUtility } from "../lib/bcryptUtility";
import jwt from "jsonwebtoken";
import { envConfig } from "../../../config";
const register = async (payload: IAuth) => {
	const checkUser = await User.findById(payload.email);

	if (checkUser) {
		throw new CustomError(302, "User already exists!");
	}

	const hashPassword = await bcryptUtility.generateHashPassword(
		payload.password
	);

	const user = await User.create({
		...payload,
		password: hashPassword,
	});

	return user;
};

const login = async (payload: Omit<IAuth, "fullname">) => {
	const checkUser = await User.findById(payload.email);

	if (!checkUser) {
		throw new CustomError(401, "Invalid credentials");
	}

	const hashPassword = await bcryptUtility.comparePassword(
		payload.password,
		checkUser.password
	);

	if (!hashPassword) {
		throw new CustomError(400, "Invalid credentials");
	}

	const token = jwt.sign(
		{ id: checkUser.id, email: checkUser.email },
		envConfig.jwt_secret as string,
		{ expiresIn: "30d" }
	);
	return token;
};

export const authServices = {
	register,
	login,
};
