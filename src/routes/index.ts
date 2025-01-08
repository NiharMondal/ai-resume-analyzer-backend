import { Router } from "express";
import { routesArr } from "./routesArr";

const router = Router();

routesArr.forEach((el) => router.use(el.path, el.contl));

export const rootRotuer = router;
