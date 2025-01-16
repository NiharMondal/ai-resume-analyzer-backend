import path from "path";

import dotenv from "dotenv";
import { cwd } from "process";
dotenv.config({ path: path.join(cwd(), ".env") });

export const envConfig = {
	port: 5000,
	mongo_uri: process.env.MONGO_URI,
	open_api_key: process.env.OPENAI_API_KEY,
};
