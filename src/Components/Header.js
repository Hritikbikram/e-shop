import React, {  useEffect, useState } from 'react';
import { NavLink, useNavigate  } from 'react-router-dom';
import logo from '../Images/brand.svg';
import { useFormik } from 'formik';
import { Button, Input } from '@material-tailwind/react';

const Header = () => {

  const [isShow,setShow]=useState(false);

  // const [dropShow,setdropShow]=useState(false);

 

  const nav= useNavigate()

  const formik=useFormik({
    initialValues:{
      search:''
    },

    onSubmit:(vals,{resetForm})=>
    {
      nav(`search/${vals.search}`);
      resetForm();
    }
  })




  const getEmail=localStorage.getItem("email");
  const getPassword=localStorage.getItem("password");
  const getUsername=localStorage.getItem("username");

  

  function removeLogin(){
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    localStorage.removeItem("username");
    localStorage.removeItem("isAdmin")
  }



  
  if(localStorage.getItem("isAdmin")=== "admin")
  {

    return (
      <header>

        
        
        <div className='py-1 px-[10%] bg-gray-200 flex text-xl justify-between'>

          
    <div className='pl-9 py-4'>
    <NavLink to='/' className="text-xl">
    <img src={logo} alt="LOGO" />
    </NavLink>
    
    </div>
    
    
    
          {getEmail && getPassword?
          <div className='p-3'>
            <NavLink to="login" className='p-3 font-bold'>{getUsername}</NavLink>
            <NavLink to="/" onClick={()=> removeLogin()}
            
             >
              <i className="fa-solid fa-right-from-bracket text-red-800 hover:bg-red-500 hover:text-white hover:rounded-full p-3"></i>
            </NavLink>
            </div>
          :
            <NavLink to="login" className='p-3 pt-6'>Login</NavLink>
          }
    
    
          
    
    
        </div>
      </header>
    )

  }


  else
  {
    return (

      //   <header className='flex space-x-10 justify-evenly px-5 py-4 top-0 z-10'>
    
      //     <div className='pl-9 py-4'>
      //       <NavLink to='/' className="text-xl">
      //         <img src={logo} alt="LOGO" />
      //       </NavLink>
    
      //     </div>
    
    
      //     {isShow &&<div className='sm:flex sm:flex-col space-y-2 mt-4 hidden'>
    
      //       <ul>
              
      //         <li>
      //           <NavLink className="hover:text-orange-300 duration-200" to='/'>Home</NavLink>
      //         </li>
    
      //         <li>      
      //             <NavLink className="hover:text-orange-300 duration-200" to='/'>Pages</NavLink>
      //         </li>
    
      //         <li>      
      //           <NavLink className="hover:text-orange-300 duration-200" to='/'>Products</NavLink>
      //         </li>
    
    
      //         <li>
      //            <NavLink className="hover:text-orange-300 duration-200" to='/'>Blog</NavLink>
      //         </li>
              
      //         <li>
      //           <NavLink className="hover:text-orange-300 duration-200" to='/'>Shop</NavLink>
      //         </li>
    
      //         <li>
      //           <NavLink className="hover:text-orange-300 duration-200" to='/'>Contact</NavLink>
      //         </li>
    
      //         </ul>
    
    
      //     </div> }
    
    
    
    
    
    
    
    
      //  <div className='space-x-7 py-5 text-xl md:hidden'>
    
      //         <NavLink className="hover:text-orange-300 duration-200" to='/'>Home</NavLink>
    
              
      //         <NavLink className="hover:text-orange-300 duration-200" to='/'>Pages</NavLink>
    
      //         <NavLink className="hover:text-orange-300 duration-200" to='/'>Products</NavLink>
    
      //         <NavLink className="hover:text-orange-300 duration-200" to='/'>Blog</NavLink>
    
      //         <NavLink className="hover:text-orange-300 duration-200" to='/'>Shop</NavLink>
    
      //         <NavLink className="hover:text-orange-300 duration-200" to='/'>Contact</NavLink>
    
    
    
      //     </div> 
    
    
    
    
      //     <div className=' py-5 text-xl'>
    
      //       <form onSubmit={formik.handleSubmit}>
      //         <div className='flex '>
      //         <Input 
      //         className='rounded-r-none w-[100%]' 
      //         type='text'
      //          label='Search Item'
      //          name='search'
      //           onChange={formik.handleChange}
      //            value={formik.values.search}/>
    
    
      //         <Button className='text-lg px-5 py-1 rounded-l-none'><i className="fa-solid fa-magnifying-glass"></i></Button>
      //         </div>
      //       </form>
            
      //     </div>      
    
    
      //     <div className='hidden md:flex'>
      //   <button onClick={()=>setShow(!isShow)}>
        
      //     {isShow ? <i className="fa-regular fa-circle-xmark"></i> : <i className='fa-solid fa-bars'></i> } 
           
      //   </button>
      // </div>
    
      //   </header>
    
    
    
      
      <header >
    
        <div className='py-1 px-[10%] bg-gray-200 flex text-xl justify-end'>
    
    
          <NavLink to="/cart" className='pt-3'>
            <i className="fa-solid fa-shopping-cart rounded-full text-center p-4 hover:bg-white duration-500 text-green-700 hover:text-orange-700 "></i>
          </NavLink>
    
          {getEmail && getPassword?
          <div className='p-3'>
            <NavLink to="login" className='p-3 font-bold'>{getUsername}</NavLink>
            <NavLink to="/" onClick={()=> removeLogin()}
            
             >
              <i className="fa-solid fa-right-from-bracket text-red-800 hover:bg-red-500 hover:text-white hover:rounded-full p-3"></i>
            </NavLink>
            </div>
          :
            <NavLink to="login" className='p-3 pt-6'>Login</NavLink>
          }
    
    
          
    
    
        </div>
    
      <div className='flex space-x-10 justify-evenly px-5 py-4 top-0 z-10'>
    
    <div className='pl-9 py-4'>
    <NavLink to='/' className="text-xl">
    <img src={logo} alt="LOGO" />
    </NavLink>
    
    </div>
    
    
    
    
    
    
    
    
    
    
    <div className='space-x-7 py-5 text-xl lg:hidden'>
    
    <NavLink className="hover:text-orange-300 duration-200" to='/'>Home</NavLink>
    
    
    <NavLink className="hover:text-orange-300 duration-200" to='/product'>Products</NavLink>
    
    <NavLink className="hover:text-orange-300 duration-200" to='/blog'>Blogs</NavLink>
    
    
    
    <NavLink className="hover:text-orange-300 duration-200" to='/whilist'>Whilist</NavLink>
    
    <NavLink className="hover:text-orange-300 duration-200" to='/FAQ'>FAQs</NavLink>
    
    <NavLink className="hover:text-orange-300 duration-200" to='/contact'>Contact</NavLink>
    
    
    
    </div> 
    
    
    
    
    <div className=' py-5 text-xl'>
    
    <form onSubmit={formik.handleSubmit}>
    <div className='flex '>
    <Input 
    className='rounded-r-none w-[100%]' 
    type='text'
    label='Search Item'
    name='search'
    onChange={formik.handleChange}
    value={formik.values.search}/>
    
    
    <Button className='text-lg px-5 py-1 rounded-l-none'><i className="fa-solid fa-magnifying-glass"></i></Button>
    </div>
    </form>
    
    </div>      
    
    
    <div className='hidden lg:flex'>
    <button onClick={()=>setShow(!isShow)}>
    
    {isShow ? <i className="fa-regular fa-circle-xmark"></i> : <i className='fa-solid fa-bars'></i> } 
    
    </button>
    </div>
    
    </div>
    
    {isShow &&<div className='lg:flex lg:flex-col space-y-1 mt-1 hidden text-center' onClick={()=>setShow(false)}  >
    
    <ul>
    
    <li className='py-1 hover:text-orange-300 duration-200'>
    <NavLink className="hover:text-orange-300 duration-200" to='/'>Home</NavLink>
    </li>
    
    <li className='py-1'>      
    <NavLink className="hover:text-orange-300 duration-200" to='/product'>Products</NavLink>
    </li>
    
    
    <li className='py-1'>
    <NavLink className="hover:text-orange-300 duration-200" to='/blog'>Blog</NavLink>
    </li>
    
    
    
    <NavLink className="hover:text-orange-300 duration-200" to='/whilist'>Whilist</NavLink>
    
    <li className='py-1'>      
    <NavLink className="hover:text-orange-300 duration-200" to='/FAQ'>FAQs</NavLink>
    </li>
    
    <li className='py-1'>
    <NavLink className="hover:text-orange-300 duration-200" to='/contact'>Contact</NavLink>
    </li>
    
    </ul>
    
    
    </div> }
    </header>
      
    
    
    
    
    
    
    
    
    
    
    
      )
  }





//   return (

//   //   <header className='flex space-x-10 justify-evenly px-5 py-4 top-0 z-10'>

//   //     <div className='pl-9 py-4'>
//   //       <NavLink to='/' className="text-xl">
//   //         <img src={logo} alt="LOGO" />
//   //       </NavLink>

//   //     </div>


//   //     {isShow &&<div className='sm:flex sm:flex-col space-y-2 mt-4 hidden'>

//   //       <ul>
          
//   //         <li>
//   //           <NavLink className="hover:text-orange-300 duration-200" to='/'>Home</NavLink>
//   //         </li>

//   //         <li>      
//   //             <NavLink className="hover:text-orange-300 duration-200" to='/'>Pages</NavLink>
//   //         </li>

//   //         <li>      
//   //           <NavLink className="hover:text-orange-300 duration-200" to='/'>Products</NavLink>
//   //         </li>


//   //         <li>
//   //            <NavLink className="hover:text-orange-300 duration-200" to='/'>Blog</NavLink>
//   //         </li>
          
//   //         <li>
//   //           <NavLink className="hover:text-orange-300 duration-200" to='/'>Shop</NavLink>
//   //         </li>

//   //         <li>
//   //           <NavLink className="hover:text-orange-300 duration-200" to='/'>Contact</NavLink>
//   //         </li>

//   //         </ul>


//   //     </div> }








//   //  <div className='space-x-7 py-5 text-xl md:hidden'>

//   //         <NavLink className="hover:text-orange-300 duration-200" to='/'>Home</NavLink>

          
//   //         <NavLink className="hover:text-orange-300 duration-200" to='/'>Pages</NavLink>

//   //         <NavLink className="hover:text-orange-300 duration-200" to='/'>Products</NavLink>

//   //         <NavLink className="hover:text-orange-300 duration-200" to='/'>Blog</NavLink>

//   //         <NavLink className="hover:text-orange-300 duration-200" to='/'>Shop</NavLink>

//   //         <NavLink className="hover:text-orange-300 duration-200" to='/'>Contact</NavLink>



//   //     </div> 




//   //     <div className=' py-5 text-xl'>

//   //       <form onSubmit={formik.handleSubmit}>
//   //         <div className='flex '>
//   //         <Input 
//   //         className='rounded-r-none w-[100%]' 
//   //         type='text'
//   //          label='Search Item'
//   //          name='search'
//   //           onChange={formik.handleChange}
//   //            value={formik.values.search}/>


//   //         <Button className='text-lg px-5 py-1 rounded-l-none'><i className="fa-solid fa-magnifying-glass"></i></Button>
//   //         </div>
//   //       </form>
        
//   //     </div>      


//   //     <div className='hidden md:flex'>
//   //   <button onClick={()=>setShow(!isShow)}>
    
//   //     {isShow ? <i className="fa-regular fa-circle-xmark"></i> : <i className='fa-solid fa-bars'></i> } 
       
//   //   </button>
//   // </div>

//   //   </header>



  
//   <header >

//     <div className='py-1 px-[10%] bg-gray-200 flex text-xl justify-end'>


//       <NavLink to="/cart" className='pt-3'>
//         <i className="fa-solid fa-shopping-cart rounded-full text-center p-4 hover:bg-white duration-500 text-green-700 hover:text-orange-700 "></i>
//       </NavLink>

//       {getEmail && getPassword?
//       <div className='p-3'>
//         <NavLink to="login" className='p-3 font-bold'>{getUsername}</NavLink>
//         <NavLink to="/" onClick={()=> removeLogin()}
        
//          >
//           <i className="fa-solid fa-right-from-bracket text-red-800 hover:bg-red-500 hover:text-white hover:rounded-full p-3"></i>
//         </NavLink>
//         </div>
//       :
//         <NavLink to="login" className='p-3 pt-6'>Login</NavLink>
//       }


      


//     </div>

//   <div className='flex space-x-10 justify-evenly px-5 py-4 top-0 z-10'>

// <div className='pl-9 py-4'>
// <NavLink to='/' className="text-xl">
// <img src={logo} alt="LOGO" />
// </NavLink>

// </div>










// <div className='space-x-7 py-5 text-xl lg:hidden'>

// <NavLink className="hover:text-orange-300 duration-200" to='/'>Home</NavLink>


// <NavLink className="hover:text-orange-300 duration-200" to='/product'>Products</NavLink>

// <NavLink className="hover:text-orange-300 duration-200" to='/blog'>Blogs</NavLink>



// <NavLink className="hover:text-orange-300 duration-200" to='/whilist'>Whilist</NavLink>

// <NavLink className="hover:text-orange-300 duration-200" to='/FAQ'>FAQs</NavLink>

// <NavLink className="hover:text-orange-300 duration-200" to='/contact'>Contact</NavLink>



// </div> 




// <div className=' py-5 text-xl'>

// <form onSubmit={formik.handleSubmit}>
// <div className='flex '>
// <Input 
// className='rounded-r-none w-[100%]' 
// type='text'
// label='Search Item'
// name='search'
// onChange={formik.handleChange}
// value={formik.values.search}/>


// <Button className='text-lg px-5 py-1 rounded-l-none'><i className="fa-solid fa-magnifying-glass"></i></Button>
// </div>
// </form>

// </div>      


// <div className='hidden lg:flex'>
// <button onClick={()=>setShow(!isShow)}>

// {isShow ? <i className="fa-regular fa-circle-xmark"></i> : <i className='fa-solid fa-bars'></i> } 

// </button>
// </div>

// </div>

// {isShow &&<div className='lg:flex lg:flex-col space-y-1 mt-1 hidden text-center' onClick={()=>setShow(false)}  >

// <ul>

// <li className='py-1 hover:text-orange-300 duration-200'>
// <NavLink className="hover:text-orange-300 duration-200" to='/'>Home</NavLink>
// </li>

// <li className='py-1'>      
// <NavLink className="hover:text-orange-300 duration-200" to='/product'>Products</NavLink>
// </li>


// <li className='py-1'>
// <NavLink className="hover:text-orange-300 duration-200" to='/blog'>Blog</NavLink>
// </li>



// <NavLink className="hover:text-orange-300 duration-200" to='/whilist'>Whilist</NavLink>

// <li className='py-1'>      
// <NavLink className="hover:text-orange-300 duration-200" to='/FAQ'>FAQs</NavLink>
// </li>

// <li className='py-1'>
// <NavLink className="hover:text-orange-300 duration-200" to='/contact'>Contact</NavLink>
// </li>

// </ul>


// </div> }
// </header>
  











//   )
}

export default Header