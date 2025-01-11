import { readFile } from "fs";
import CustomError from "../../../utils/CustomError";
import pdfParse, { Result } from "pdf-parse";
import { analyzeResume } from "../../../helpers/analyzeResume";
const createIntoDB = async (file: any) => {
	if (file.mimetype === "application/pdf") {
		readFile(file.path, async (error, data) => {
			if (error) {
				throw new CustomError(404, "Something went wrong!");
			}

			const { text } = await pdfParse(data);

			const result = analyzeResume(text);
			console.log(result);
		});
	}
};

export const resumeServices = { createIntoDB };
