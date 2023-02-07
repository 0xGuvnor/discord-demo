import { configureStore } from "@reduxjs/toolkit";
import channelReducer from "./features/channelSlice";

export const store = configureStore({
  reducer: {
    channel: channelReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
