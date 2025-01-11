import { Router } from "express";
import { resumeControllers } from "./resume.controller";
import { fileUploader } from "../../../helpers/fileUploader";

const router = Router();

router.post(
	"/",
	fileUploader().single("resume"),
	resumeControllers.createIntoDB
);

export const resumeRouter = router;
