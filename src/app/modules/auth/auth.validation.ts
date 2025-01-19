import { z } from "zod";

const register = z.object({
	fullname: z
		.string({ required_error: "Fullname is required" })
		.min(3, "User name should be at least 3 characters")
		.trim(),
	email: z
		.string({ required_error: "Email is required" })
		.email({ message: "Email should be valid email" })
		.trim(),
	password: z
		.string({ required_error: "Password is required" })
		.min(6, "Password must be 6 characters long")
		.max(30, "Password can not excede 30 characters")
		.trim(),
});

const login = z.object({
	email: z
		.string({ required_error: "Email is required" })
		.email({ message: "Email should be valid email" })
		.trim(),
	password: z
		.string({ required_error: "Password is required" })

		.trim(),
});
export const authValidation = { register, login };
