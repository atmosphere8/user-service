import { remove_user_service } from "$services/index.service";
import async_handler_middleware from "$middlewares/async/async-handler.middleware";
import { api_response } from "$helpers/index";

const remove_user_controller = async_handler_middleware(async (req, res) => {
  const id = Number(req.params.id);
  const result = await remove_user_service(id);

  api_response(res, 200, "🟢 User successfully deleted", result);
});

export default remove_user_controller;
