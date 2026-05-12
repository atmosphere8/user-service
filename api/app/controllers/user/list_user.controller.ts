import { list_user_service } from "$services/index.service";
import async_handler from "$middlewares/async/async-handler.middleware";

const list_user_controller = async_handler(async (req, res) => {
  const result = await list_user_service();

  res.json(result);
});

export default list_user_controller;
