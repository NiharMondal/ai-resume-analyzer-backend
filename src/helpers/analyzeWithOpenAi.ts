import { client } from "../lib/openAiConfig";
import CustomError from "../utils/CustomError";

export const analyzeWithOpenAI = async (resumeText: string) => {
	try {
		const prompt = `
You are a professional resume analyzer. Analyze the following resume content and provide detailed feedback, including:
1. Overall score out of 100.
2. Strengths of the resume.
3. Weaknesses or areas to improve.
4. Additional tips for improvement.

Resume content:
${resumeText}`;

		const response = await client.chat.completions.create({
			model: "o1-preview-2024-09-12", // You can also use GPT-4 if available

			max_tokens: 500, // Adjust token limit based on your use case
			temperature: 0.7, // Adjust creativity level
			messages: [{ content: prompt, role: "developer" }],
		});

		// Extract and return feedback from OpenAI response
		return {
			feedback: response.choices[0],
		};
	} catch (error) {
		console.error("Error in OpenAI API:", error);
		throw new CustomError(500, "Error in OpenAI API");
	}
};
