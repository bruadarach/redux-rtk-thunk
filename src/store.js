import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

// 1. 각각 슬라이스의 리듀서들 추가해 하나의 거대한 스토어 생성
const store = configureStore({
  // 1. 각각 슬라이스의 리듀서들 추가해 하나의 거대한 스토어 생성
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;
