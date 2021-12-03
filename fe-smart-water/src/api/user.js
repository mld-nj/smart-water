import request from "./request";
export const register = (username, password, email) => {
  return request.post(
    "/user/register",
    {
      user: {
        username,
        password,
        email,
      },
    },
    {
      "Content-Type": "application/json",
    }
  );
};
export const login = (username, password) => {
  return request.post(
    "/user/login",
    {
      user: {
        username,
        password,
      },
    },
    {
      "Content-Type": "application/json",
    }
  );
};
export const isLogin = () => {
  return request.get("/user/isLogin", { "Content-Type": "application/json" });
};
