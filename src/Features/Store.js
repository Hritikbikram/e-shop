import { configureStore } from "@reduxjs/toolkit";
import { ecommerceapi } from "./EcommerceApi";
import InfoSlice from "./InfoSlice";


export const store = configureStore({
  reducer:{
    contact: InfoSlice,
    [ecommerceapi.reducerPath]:ecommerceapi.reducer,
  },
  middleware:(getDefault)=>getDefault().concat(ecommerceapi.middleware)
})