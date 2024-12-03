import { configureStore } from "@reduxjs/toolkit";
import authReduce from './auth-slice'
import adminProductsSlice from './admin/products-slice' 
import shoppingProductSlice from './shop/products-slice' 

const store = configureStore({
    reducer : {
        auth:authReduce,
        adminProducts:adminProductsSlice,
        shopProducts:shoppingProductSlice
        
    }
})

export default store;