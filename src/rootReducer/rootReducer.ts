import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "../slice/productSlice"

const rootReducer = combineReducers({
    product : productReducer
})

export default rootReducer