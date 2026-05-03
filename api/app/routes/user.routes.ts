import { Router } from "express";
import {
  list_user_controller,
  get_user_controller,
  create_user_controller,
  remove_user_controller,
} from "../controllers/index.controller";

const router: Router = Router();

router.get("/list", list_user_controller);
router.get("/get/:id", get_user_controller);
router.post("/create", create_user_controller);
router.delete("/remove/:id", remove_user_controller);

export default router;
