import React from 'react'
import { useGetAllCommentsQuery } from '../Features/EcommerceApi';
import { useParams } from 'react-router';

const Comment = () => {

   

  const {blogs}=useParams()

  const {data}=useGetAllCommentsQuery(blogs)
  console.log(data);

  return (
    <div>Comment</div>
  )
}

export default Comment