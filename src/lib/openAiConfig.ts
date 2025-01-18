import OpenAI from "openai";
import { envConfig } from "../config";

export const client = new OpenAI({
	apiKey: envConfig.open_api_key,
});
