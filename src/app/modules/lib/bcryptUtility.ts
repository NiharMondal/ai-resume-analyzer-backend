import bcrypt from "bcrypt";

/**
 *
 * @param password string
 * @returns string
 */

const generateHashPassword = async (password: string) => {
	const result = await bcrypt.hash(password, 10);
	return result;
};

/**
 *
 * @param plainText string
 * @param hashPassword string
 * @returns boolean
 */
const comparePassword = async (plainText: string, hashPassword: string) => {
	const result = await bcrypt.compare(plainText, hashPassword);
	return result;
};

export const bcryptUtility = { generateHashPassword, comparePassword };
