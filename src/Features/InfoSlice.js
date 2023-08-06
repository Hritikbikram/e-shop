import { createSlice } from "@reduxjs/toolkit";
import { getCartDetail, getComments, getContactDetail, getOrders, getReviews, getSignup, getWhilistDetail, setCartDetail, setComments, setContactDetail, setOrders, setReviews, setSignup, setWhilistDetail } from "./LocalStorage";


const infoslice=createSlice({
  name:'localdatas',
  initialState:{
    contactDetail: getContactDetail(),
    cartDetails: getCartDetail(),
    whilistDetails: getWhilistDetail(),
    signupDetails:getSignup(),
    reviewDetails:getReviews(),
    commentDetails:getComments(),
    orderDetails: getOrders(),

  },
  reducers:{

    addContactDetail:(state,action)=>{

        state.contactDetail.push(action.payload);
        setContactDetail(state.contactDetail);

    },


    addCartDetail:(state,action)=>{
      if(state.cartDetails.length===0)
      {
        state.cartDetails.push(action.payload);
        setCartDetail(state.cartDetails);
      }
      else
      {
        const res= state.cartDetails.findIndex(
          (data)=>data.productid === action.payload.productid
        );

        if(res>=0){
          state.cartDetails[res].quantity= state.cartDetails[res].quantity + action.payload.quantity;
         setCartDetail(state.cartDetails);      
        }

        else
        {
          state.cartDetails.push(action.payload);
          setCartDetail(state.cartDetails);
        }
        

      }      
    },

    deleteCart:(state,action)=>{
      const index= state.cartDetails.findIndex(
        (data)=>data.productid === action.payload);
      state.cartDetails.splice(index,1);
      setCartDetail(state.cartDetails);

    },




    addWhilistDetail:(state,action)=>{
      state.whilistDetails.push(action.payload);
      setWhilistDetail(state.whilistDetails);
    },


    
    addSignUpDetail:(state,action)=>{
      state.signupDetails.push(action.payload);
      setSignup(state.signupDetails);
    },


    
    addReviewDetail:(state,action)=>{
      state.reviewDetails.push(action.payload);
      setReviews(state.reviewDetails);
    },

    
    addCommentDetail:(state,action)=>{
      state.commentDetails.push(action.payload);
      setComments(state.commentDetails);
    },

    
    addOrderDetail:(state,action)=>{
      state.orderDetails.push(action.payload);
      setOrders(state.orderDetails);
    },




  

  }
})


export const { addContactDetail, addCartDetail, addSignUpDetail, addReviewDetail, addCommentDetail,addWhilistDetail, deleteCart, addOrderDetail }=infoslice.actions;
export default infoslice.reducer;