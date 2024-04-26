import { configureStore ,combineReducers} from "@reduxjs/toolkit";
import AlertDataSlice from "./storeSlices/AlertDataSlice";
import UserSlice from "./storeSlices/UserStoreSlice";
import ProductSlice from "./storeSlices/ProductStoreSlice";

const allReducer=combineReducers({
    AlertDataSlice,
    UserSlice,
    ProductSlice
});

const store=configureStore({
    reducer:allReducer
});

export default store;
