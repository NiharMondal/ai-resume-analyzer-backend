export const analyzeResume = (text: string) => {
	const keywords = ["React", "Node.js", "Teamwork", "JavaScript", "CSS"];
	let score = 0;

	keywords.forEach((keyword) => {
		if (text.includes(keyword)) score += 10; // Assign points per keyword
	});

	// Add more criteria (e.g., length of resume, proper formatting)
	const feedback = score >= 70 ? "Great resume!" : "Needs improvement";

	return { score, feedback };
};
