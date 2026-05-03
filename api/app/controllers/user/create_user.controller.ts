import create_user_service from "$services/user/create_user.service";
import async_handler from "$middlewares/async-handler.middleware";

const create_user_controller = async_handler(async (req, res) => {
  const { name, email, password } = req.body;
  const user = await create_user_service({ name, email, password });
  res.status(201).json(user);
});

export default create_user_controller;
