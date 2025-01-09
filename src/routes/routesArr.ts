import { resumeRouter } from "../app/modules/resume/resume.routes";
import { userRouter } from "../app/modules/user/user.routes";

export const routesArr = [
	{ path: "/upload-resume", contl: resumeRouter },
	{ path: "/user", contl: userRouter },
];
