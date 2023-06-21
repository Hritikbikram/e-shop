import { configureStore } from "@reduxjs/toolkit";
import { ecommerceapi } from "./EcommerceApi";
import localdata from "./UserSlice";



export const store = configureStore({
  reducer:{
    [ecommerceapi.reducerPath]:ecommerceapi.reducer,
  },
  middleware:(getDefault)=>getDefault().concat(ecommerceapi.middleware),
  info:localdata
})