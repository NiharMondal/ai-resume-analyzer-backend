import openai from "../lib/openAiConfig";

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

		const response = await openai.chat.completions.create({
			model: "gpt-4o", // You can also use GPT-4 if available
			messages: [{ role: "user", content: prompt, name: "hello" }],
		});

		// Extract and return feedback from OpenAI response
		return {
			feedback: response.choices[0],
		};
	} catch (error) {
		console.error("Error in OpenAI API:", error);
		throw new Error("Error while processing resume with OpenAI");
	}
};
