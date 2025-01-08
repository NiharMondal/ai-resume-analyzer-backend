import express, { Application } from "express";
import cors from "cors";
import { rootRotuer } from "./routes";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import notFoundRoute from "./middlewares/notFound";

const app: Application = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1", rootRotuer);
app.use("*", notFoundRoute);
app.use(globalErrorHandler);

export default app;
