import OpenAI from "openai";
import { envConfig } from "../config";

const openai = new OpenAI({
	apiKey: envConfig.open_api_key,
});

export default openai;
