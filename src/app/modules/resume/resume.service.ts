import { readFileSync, unlinkSync } from "fs";

import pdfParse from "pdf-parse";
import { analyzeResume } from "../../../helpers/analyzeResume";

const createIntoDB = async (file: any) => {
	if (file.mimetype === "application/pdf") {
		const buffer = readFileSync(file.path);
		const data = await pdfParse(buffer);
		unlinkSync(file.path);
		const result = await analyzeResume(data.text);
		return result;
	} else {
		const text = readFileSync(file.path, "utf-8");
		unlinkSync(file.path);
		const result = await analyzeResume(text);
		return result;
	}
};

export const resumeServices = { createIntoDB };
