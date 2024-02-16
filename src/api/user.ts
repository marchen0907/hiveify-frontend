import service from "@/axios";

// 登录接口
export const login = (email: string, password: string) => {
  return service.get("/user/login", {
    params: {
      email,
      password,
    },
  });
};

// 获取用户信息
export const getUserinfo = () => {
  return service.get("/user/getUserInfo");
};
