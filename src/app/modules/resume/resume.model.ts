import { model, Schema } from "mongoose";
import { IResume } from "./resume.interface";

const resumeSchema = new Schema<IResume>({
	file: {
		type: String,
		required: [true, "Resume file is required"],
	},
});

const Resume = model("Resume", resumeSchema);
export default Resume;
