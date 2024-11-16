import { configureStore } from "@reduxjs/toolkit";
import authReduce from './auth-slice'
import adminProductsSlice from './admin/products-slice' 
import AdminProducts from "@/pages/admin-view/products";

const store = configureStore({
    reducer : {
        auth:authReduce,
        adminProducts:adminProductsSlice
        
    }
})

export default store;