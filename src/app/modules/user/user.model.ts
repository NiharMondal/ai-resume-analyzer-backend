import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>({
	fullname: {
		type: String,
		required: [true, "User name is required"],
	},
	email: {
		type: String,
		required: [true, "Email is required"],
		unique: [true, "Email must be unique"],
		index: true,
	},
	password: {
		type: String,
		required: [true, "Password is required"],
	},
});

export const User = model("User", userSchema);
