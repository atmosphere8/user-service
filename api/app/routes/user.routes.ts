import { Router } from "express";
import {
  list_user_controller,
  get_user_controller,
  create_user_controller,
  remove_user_controller,
  login_user_controller,
} from "$controllers/index.controller";
import auth_middleware from "$middlewares/auth/auth.middleware";

const router: Router = Router();

router.get("/list", auth_middleware, list_user_controller);
router.get("/get/:id", auth_middleware, get_user_controller);
router.post("/create", create_user_controller);
router.delete("/remove/:id", auth_middleware, remove_user_controller);
router.post("/login", login_user_controller);

export default router;
