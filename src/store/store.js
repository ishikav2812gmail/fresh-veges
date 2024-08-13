import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import authReducer from './loginSlice'
import basketReducer from './basketSlice'
import orderReducer from './orderSlice'
export const store =configureStore({
    reducer : {
        users :userReducer,
        auth: authReducer,
        basket: basketReducer,
        order: orderReducer,
    }
})