import { configureStore } from "@reduxjs/toolkit";

import searchReducer from "./components/Review/searchSlice";

export const store = configureStore({
    reducer : {
        search : searchReducer
    }
})