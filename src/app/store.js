import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../feature/Product/ProductSlice';

export const store = configureStore({
    reducer: {
        product: productReducer,
    }
})