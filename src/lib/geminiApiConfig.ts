import { GoogleGenerativeAI } from "@google/generative-ai";
import { envConfig } from "../config";

const genAI = new GoogleGenerativeAI(envConfig.gemini_api_key as string);
export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
