import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const base="https://dummyjson.com/";


export const ecommerceapi = createApi({
  reducerPath:'Ecommerce Api',
  baseQuery: fetchBaseQuery({baseUrl:base}),
  endpoints:(builder)=>({

    getAllProducts:builder.query({
      query:(query)=>({
        url:'products',
        method:'GET'
      })
    }),



    getProductByid:builder.query({
      query:(query)=>({
        url:`products/${query}`,
             
        
      })
    }),

    searchProduct:builder.query({
      query:(query)=>({
        url:'products/search/',
        method:'GET',
        params:{
          q:`${query}`
        }
      })
    }),



    // Blogs

    getAllBlogs:builder.query({
      query:(query)=>({
        url:'posts',
        method:'GET'
      })
    }),

    getBlogById:builder.query({
      query:(query)=>({
        url:`posts/${query}`,
        method:'GET'
      })
    }),

    getAllComments:builder.query({
      query:(query)=>({
        url:`post/comments/${query}`,
        method:'GET'
      })
    }),


    // Categories

    getAllGategories:builder.query({
      query:(query)=>({
        url:'products/categories'
      })
    }),

    

    getProductsByCategory:builder.query({
      query:(query)=>({
        url:`products/category/${query}`,
        method:'GET'
      })
    }),




    //Authentication

    getallusers:builder.query({
      query:(query)=>({
        url:'users',
        method:'GET'
      })
    })


    

  })
})

export const {useGetAllProductsQuery, useGetProductByidQuery,useSearchProductQuery, useGetAllBlogsQuery, useGetBlogByIdQuery,useGetAllCommentsQuery, useGetAllGategoriesQuery,useGetallusersQuery, useGetProductsByCategoryQuery} =ecommerceapi;