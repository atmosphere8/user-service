import async_handler_middleware from "$middlewares/async/async-handler.middleware";
import { api_response } from "$helpers/index";

const logout_controller = async_handler_middleware(async (req, res) => {
  res.clearCookie("token");

  api_response(res, 200, "🟢 Logout success", null);
});

export default logout_controller;
