import { list_user_service } from "$services/index.service";
import async_handler from "$middlewares/async/async-handler.middleware";
import { api_response } from "$helpers/index";

const list_user_controller = async_handler(async (req, res) => {
  const result = await list_user_service();

  api_response(res, 200, "🟢 Users retrieved successfully", result);
});

export default list_user_controller;
