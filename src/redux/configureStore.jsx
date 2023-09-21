import { configureStore } from "@reduxjs/toolkit";
import headerSlice from "./headerSlice"
import todoSlice from "./todoSlice";

const store = configureStore({
    reducer: {
        header: headerSlice,
        todo: todoSlice
    }
})

export default store;