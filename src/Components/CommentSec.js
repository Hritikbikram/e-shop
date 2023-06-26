import { useFormik } from 'formik'
import React from 'react'

const CommentSec = () => {


  const nav=useNavigate();
  const dispatch=useDispatch();

  const getEmail=localStorage.getItem("email");
    const getPassword=localStorage.getItem("password");
    const getUsername=localStorage.getItem("username");

  const comments=useFormik({
    initialValues:{
      comment:'',
      username:''
    },
    onSubmit:(values,resetForm)=>{
      values.username=getUsername;
        if(getEmail!==null && getPassword!==null)
        {
        console.log(values);
        // dispatch(addReviewDetail(values));
        // resetForm();

        }

        else
        {
          // nav('../Pages/Login')
          console.log(none)
        }
    }
  })


  return (
    <>
    
        
    <form onSubmit={comments.handleSubmit}>
              <div className="w-[100%] py-5">
                <Textarea label="Message" name='comment' className='text-xl' onSubmit={comments.handleSubmit} onChange={comments.handleChange} />

                <Button type='submit' className='mt-4'>Post</Button>
              </div>
        </form>
    
    
    </>
  )
}

export default CommentSec