export const setContactDetail=(contact)=>{
  localStorage.setItem("Contact", JSON.stringify(contact));
};



export const getContactDetail=()=>{
  const result=localStorage.getItem("Contact")
  return JSON.parse(result) || [];
}



export const setCartDetail=(shopcart)=>{
  localStorage.setItem("Shopping", JSON.stringify(shopcart));
};


export const getCartDetail=()=>{
  const cartresult=localStorage.getItem("Shopping");
  return JSON.parse(cartresult) || [];
}





export const setWhilistDetail=(whilistcart)=>{
  localStorage.setItem("Whilist", JSON.stringify(whilistcart));
};


export const getWhilistDetail=()=>{
  const whilistresult=localStorage.getItem("Whilist");
  return JSON.parse(whilistresult) || [];
}







export const setSignup=(signup)=>{
  localStorage.setItem("SignUp", JSON.stringify(signup));
};


export const getSignup=()=>{
  const signresult=localStorage.getItem("SignUp");
  return JSON.parse(signresult) || [];
}



export const setReviews=(review)=>{
  localStorage.setItem("ReviewsTab", JSON.stringify(review));
};


export const getReviews=()=>{
  const reviewresult=localStorage.getItem("ReviewsTab");
  return JSON.parse(reviewresult) || [];
}



export const setComments=(comment)=>{
  localStorage.setItem("CommentsTab", JSON.stringify(comment));
};


export const getComments=()=>{
  const commentresult=localStorage.getItem("CommentsTab");
  return JSON.parse(commentresult) || [];
}



export const setOrders=(order)=>{
  localStorage.setItem("Orders", JSON.stringify(order));
};


export const getOrders=()=>{
  const orderresult=localStorage.getItem("Orders");
  return JSON.parse(orderresult) || [];
}