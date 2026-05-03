import { Router } from "express";
import user_router from "./user.routes";

const routes: Router = Router();

routes.use("/user", user_router);

export default routes;
