import { createSlice } from "@reduxjs/toolkit";
import { getCartDetail, getComments, getContactDetail, getReviews, getSignup, setCartDetail, setComments, setContactDetail, setReviews, setSignup } from "./LocalStorage";


const infoslice=createSlice({
  name:'localdatas',
  initialState:{
    contactDetail: getContactDetail(),
    cartDetails: getCartDetail(),
    signupDetails:getSignup(),
    reviewDetails:getReviews(),
    commentDetails:getComments(),
  },
  reducers:{

    addContactDetail:(state,action)=>{

        state.contactDetail.push(action.payload);
        setContactDetail(state.contactDetail);

    },


    addCartDetail:(state,action)=>{
      state.cartDetails.push(action.payload);
      setCartDetail(state.cartDetails);
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




  

  }
})


export const { addContactDetail, addCartDetail, addSignUpDetail, addReviewDetail, addCommentDetail }=infoslice.actions;
export default infoslice.reducer;