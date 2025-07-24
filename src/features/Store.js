import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./News/newsSlice";

const store = configureStore({
    reducer: {
        news: newsReducer,
    }
})

export default store;