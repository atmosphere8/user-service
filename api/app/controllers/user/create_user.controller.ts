import { create_user_service } from "$services/index.service";
import async_handler from "$middlewares/async/async-handler.middleware";

const create_user_controller = async_handler(async (req, res) => {
  const { name, email, password } = req.body;
  const result = await create_user_service({ name, email, password });
  res.status(201).json(result);
});

export default create_user_controller;
