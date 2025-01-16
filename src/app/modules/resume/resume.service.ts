import { readFile, unlink } from "fs";
import CustomError from "../../../utils/CustomError";
import pdfParse from "pdf-parse";
import { analyzeResume } from "../../../helpers/analyzeResume";
import { analyzeWithOpenAI } from "../../../helpers/analyzeWithOpenAi";
const createIntoDB = async (file: any) => {
	if (file.mimetype === "application/pdf") {
		readFile(file.path, async (error, data) => {
			if (error) {
				throw new CustomError(404, "Something went wrong!");
			}

			const { text } = await pdfParse(data);

			const result = analyzeWithOpenAI(text);
			console.log(result);
			unlink(file.path, (err) => {
				console.log(err);
			});
		});
	}
};

export const resumeServices = { createIntoDB };
