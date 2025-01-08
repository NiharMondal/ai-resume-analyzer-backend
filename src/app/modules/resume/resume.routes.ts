import { Router } from "express";
import { resumeControllers } from "./resume.controller";

const router = Router();

router.post("/", resumeControllers.createIntoDB);

export const resumeRouter = router;
