import React from 'react'
import Footer from '../Components/Footer'
import { Button, Input } from '@material-tailwind/react'
import { useGetallusersQuery } from '../Features/EcommerceApi'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router';




const Login = () => {


  const signupinfo=useSelector((store)=>store.contact.signupDetails);
  

  
  const {data}=useGetallusersQuery();
  
  const userschema=Yup.object().shape({
    email: Yup.string().email().required(),

  })


  // const nav=useNavigate();

  
  const userdata= useFormik({
    initialValues:{
      email:'',
      password:'',
    },
    onSubmit:(values,{resetForm})=>{
      

      {data?.users && data?.users.map((connect,index)=>{
        

        
        if(values.email===connect.email && values.password ===connect.password)
      {
        console.log(values);
        localStorage.setItem("email",values.email);
        localStorage.setItem("password",values.password);
        localStorage.setItem("username",connect.username);
        // nav('/');

        
      }
      
      else
      {

        {signupinfo.map((sign,index)=>{
          if(values.email===sign.email && values.password ===sign.password)
          {
            console.log(sign.email);
            console.log(sign.password);
             
            localStorage.setItem("email",values.email);
            localStorage.setItem("password",values.password);
            localStorage.setItem("username",sign.username);
            localStorage.setItem("isAdmin",sign.admin);
            nav("../chart");

          }
          else
          {
            console.log("No User Found")
          }

        })}

      }

      })};


      resetForm();
    },

    validationSchema:userschema



  })

  const getEmail=localStorage.getItem("email");
  const getPassword=localStorage.getItem("password");



  const nav=useNavigate()

  
  
  
  return (

    
    <>
    

  

        <div className='bg-gray-100'>


            <div className=' py-[6%] pl-[12%]'>

              <h1 className='text-3xl font-bold pb-5'>My Account</h1>
              <p>Home/Pages/MyAccount</p>

            </div>


        </div>




        <div >

          <div className='px-[10%] py-[5%]'>

          {getEmail && getPassword? nav('/'):

            <div>

              <div className='px-[30%] p-10'>
                <h1 className='text-center text-3xl font-bold pb-5'>Login</h1>
                <p className='text-center text-gray-500 pb-10'>Please login using account detail below</p>



                
                  <form onSubmit={userdata.handleSubmit}>

                    <div className='py-4 text-lg'>
                      <Input label='Email Address' className='rounded-lg' 
                      type='email' name='email' onSubmit={userdata.handleSubmit} onChange={userdata.handleChange} value={userdata.values.email} />
                    </div>

                    <div className='py-4'>
                      <Input label='Password' className='rounded-lg' type='password' name='password' onSubmit={userdata.handleSubmit} onChange={userdata.handleChange} value={userdata.values.password} />
                    </div>

                    
                    <p className=' text-gray-500'>Forgot Your Password?</p>

                    <Button type='submit' className='p-4 mt-4 rounded-lg w-[100%]'>Login</Button>


                  </form>

                  <p className=' text-gray-500'>Don't have an account? <NavLink to="../signup" className="pl-5 text-blue-800 font-bold underline">SignUp</NavLink></p>

                

              </div>

            </div>

}

          </div>
        </div>











        <Footer />

      
    
    </>
  )
}

export default Login