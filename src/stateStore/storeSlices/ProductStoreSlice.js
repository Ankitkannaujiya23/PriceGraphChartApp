import {createSlice} from '@reduxjs/toolkit';
import { ProductData } from '../../dummyData';

const ProductSlice=createSlice({
    name:"ProductSlice",
    initialState:{
        product:ProductData
    },
    reducers:{
        addProduct(state,action){
            state.product=[...state.product, ...action.payload];
        },
        deleteProduct(state,action){
            state.product=action.payload;
        }
    }
});

export const {addProduct,deleteProduct}= ProductSlice.actions;

export default ProductSlice.reducer;
