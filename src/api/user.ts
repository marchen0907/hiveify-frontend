import service from "@/axios";

export const login = (email: string, password: string) => {
  return service.get("/user/login", {
    params: {
      email,
      password,
    },
  });
};

export const getUserinfo = () => {
  return service.get("/user/getUserInfo");
};
