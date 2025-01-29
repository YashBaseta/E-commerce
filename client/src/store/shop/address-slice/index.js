import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { build } from "vite";

const initialState = {
    isLoading:false,
    addressList:[]
}

const addressSlice= createSlice({
    name:'address',
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        
    }
})