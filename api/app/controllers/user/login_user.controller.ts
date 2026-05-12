import { login_user_service } from "$services/index.service";
import async_handler from "$middlewares/async/async-handler.middleware";
import { api_response } from "$helpers/index";

const login_user_controller = async_handler(async (req, res) => {
  const { email, password } = req.body;

  const { user, token } = await login_user_service({ email, password });

  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 15 * 60 * 1000,
  });

  const result = user;

  api_response(res, 200, "🟢 User success", result);
});

export default login_user_controller;
