import { model } from "../lib/geminiApiConfig";
import CustomError from "../utils/CustomError";

export const analyzeResume = async (resumeText: string) => {
	try {
		const prompt = `
You are a professional resume analyzer. Analyze the following resume content and provide detailed feedback, including:
1. Overall score out of 100.
2. Strengths of the resume.
3. Weaknesses or areas to improve.
4. Additional tips for improvement.

Resume content:
${resumeText}`;
		const result = await model.generateContent(prompt);

		const data = result.response.text();
		return data;
	} catch (error) {
		console.log(error);
		throw new CustomError(400, "Error occured at analyze resume function!");
	}
};
