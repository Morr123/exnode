import { configureStore } from "@reduxjs/toolkit";
import counter from "./slices/counter"; // можно удалять, сделал, ради примера

export const store = configureStore({
  reducer: {
    counter: counter, // можно удалять, сделал, ради примера
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
