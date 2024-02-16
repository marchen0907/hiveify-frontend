import { getUserinfo } from "@/api/user";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import type { User } from "Global";
import type { AppDispatch } from "@/store/index";

// 初始化数据
const initialState: User = {
  name: "",
  email: "",
  phone: "",
};

const userStore = createSlice({
  name: "userStore",
  initialState,
  // 生成action
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
    },
    removeUser: (state) => {
      state.name = initialState.name;
      state.phone = initialState.phone;
      state.email = initialState.email;
    },
  },
});

// 解构出action
export const { setUser, removeUser } = userStore.actions;

// 异步设置usr
export const asyncSetUser = () => {
  return async (dispatch: AppDispatch) => {
    const res = await getUserinfo();
    dispatch(setUser(res.data as User));
  };
};

// 获取reducer
export default userStore.reducer;
