import { Button, Textarea } from '@material-tailwind/react'
import { useFormik } from 'formik';
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { addReviewDetail } from '../Features/InfoSlice';

const Review = () => {

  const nav=useNavigate();
  const dispatch=useDispatch();

  const getEmail=localStorage.getItem("email");
    const getPassword=localStorage.getItem("password");
    const getUsername=localStorage.getItem("username");

    const reviews=useFormik({
      initialValues:{
        message:'',
        username:''
      },
      onSubmit:(values,resetForm)=>
      {
        values.username=getUsername;
        if(getEmail!==null && getPassword!==null)
        {
        console.log(values);
        dispatch(addReviewDetail(values));
        resetForm();

        }

        else
        {
          nav('../Pages/Login')
        }
      }
    })
  return (
    <>
    
        <form onSubmit={reviews.handleSubmit}>
              <div className="w-[100%] py-5">
                <Textarea label="Message" name='message' className='text-xl' onSubmit={reviews.handleSubmit} onChange={reviews.handleChange} />

                <Button type='submit' className='mt-4'>Post</Button>
              </div>
        </form>
    </>
  )
}

export default Review