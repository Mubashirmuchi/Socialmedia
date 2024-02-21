import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Store/UserSlice";
const store = configureStore({
    reducer: {
        user: userReducer,
    },
});
export default store;
