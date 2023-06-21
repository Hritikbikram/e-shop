import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";


const authbase="https://dummyjson.com/";



export const authenapi=createApi({
  reducerPath:'Authentication',
  baseQuery:fetchBaseQuery({baseUrl:authbase}),
  endpoints:(auth)=>({


    getallusers:auth.query({
      query:(query)=>({
        url:'users',
        method:'GET'
      })
    })

  })
})




