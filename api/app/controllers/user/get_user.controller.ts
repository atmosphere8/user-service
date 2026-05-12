import { get_user_service } from "$services/index.service";
import async_handler from "$middlewares/async/async-handler.middleware";
import { api_response } from "$helpers/index";

const get_user_controller = async_handler(async (req, res) => {
  const id = Number(req.params.id);
  const result = await get_user_service(id);

  api_response(res, 200, "🟢 User retrieved successfully", result);
});

export default get_user_controller;
