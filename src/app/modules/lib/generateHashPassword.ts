import bcrypt from "bcrypt";

export const generateHashPassword = async (password: string) => {
	const generatedPassword = await bcrypt.hash(password, 10);
	return generatedPassword;
};
