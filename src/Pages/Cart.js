import React, { useState } from 'react'
import Footer from '../Components/Footer'
import { Breadcrumbs, Button, Input, Typography } from '@material-tailwind/react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { addOrderDetail, deleteCart } from '../Features/InfoSlice';

const Cart = () => {

  const TABLE_HEAD = ["Product Name", "Product Code", "Price", "Quantity", "Total", "Delete"];


  


     const getEmail=localStorage.getItem("email");
    const getPassword=localStorage.getItem("password");
    const getUsername=localStorage.getItem("username");
    

    const nav=useNavigate();
    const dispatch=useDispatch();

    
    
    const shoppingdata=useSelector((store)=>store.contact.cartDetails);
    // console.log(shoppingdata);



    let [count,setCount]=useState(1);


        const orderdata=useFormik({
      initialValues:{
        quantity:count,
        productid:'',
        productname:'',
        productprice:'',
        userord:''
  
  
      },
      onSubmit:(values)=>
      {

        
        values.productid=shoppingdata.productid;
        values.productname=shoppingdata.productname;
        values.productprice=shoppingdata.productprice;
        values.userord=getUsername;
        
        if(getEmail!==null && getPassword!==null)
        {


          // console.log(values);

        }
        else
        {
          nav('./Login')
        }
        
      },

    })



    const date=new Date();

    const shipformik=useFormik({
      initialValues:{
        name:"",
        address:"",
        contact:""
      },
      onSubmit:(values,resetForm)=>{
        // console.log(values);
        try{
          const order={
            orderuser:values,orderedItem:shoppingdata,orderedDate:date.toLocaleString(),
          };
          // console.log(order)
          const res=dispatch(addOrderDetail(order));
          console.log(res);
          
        }
        catch(e){
          console.log(e)
        }

        
      },
    });



  return (
    <>



              

      <div className='bg-gray-100'>


          <div className=' py-[6%] pl-[12%]'>

            <h1 className='text-3xl font-bold pb-5'>Your Order</h1>
            
            
            
            <Breadcrumbs>
              <NavLink href="#" className="opacity-60">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </NavLink>
              <NavLink href="#" className="opacity-60">
                <span>Pages</span>
              </NavLink>
              <NavLink href="#">Order Details</NavLink>
            </Breadcrumbs>

          </div>


      </div>









    

    <div className='px-[10%] py-[5%]'>
      {getEmail && getPassword?

      <div > 
        <div className='pb-[5%]'>

          
            <table className="table-auto text-left text-xl border">

          <thead className='bg-gray-100'>
            <tr>
              

            {TABLE_HEAD.map((head) => (
                  <th key={head} className="border-y border-blue-gray-100 text-xl bg-gray-100 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-bold text-lg leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}





            </tr>
          </thead>



            <tbody>

            {shoppingdata.map((shops,index)=>{

                if(shops.userord === getUsername)
                {
                  // console.log("CArt ready to fetch");

                  return (
                  <tr key={index}>
                    <td className='p-5'>{shops.productname}</td>
                    <td className='p-5'>{shops.productid}</td>
                    <td className='p-5'>{shops.productprice}</td>

                    <td className='p-5 flex bg-gray-100'>
                      
                    <button onClick={()=>{
                      
                        setCount(count+1);
                        orderdata.values.quantity+=1;
                      }}><i className="fa-solid fa-plus border text-gray-700  pr-3 py-3"></i></button>


                        <Input name='quantity' value={shops.quantity} onChange={orderdata.handleChange}  />


                      <button onClick={()=>{
                        if (count!==0)
                        {
                        setCount(count-1);
                        orderdata.values.quantity-=1;
                        }
                      }}><i className="fa-solid fa-minus text-gray-700 pl-3 py-3"></i></button>



                    </td>
                    <td className='p-5'>Rs. 500</td>
                    <td className='p-5'>
                      
                      {" "}
                       <i className="fa-solid fa-trash text-red-900 p-5" onClick={()=>dispatch(deleteCart(shops.productid))}></i></td>
                  </tr>
                  )
                }

            })}

              
            </tbody>



            </table>



        </div>
 

        <div className='p-8 bg-gray-100 rounded-3xl'>

          <h1 className='text-3xl font-bold pb-5'>Shipping Details</h1>
          
          <div>
            <h1 className='font-bold text-lg'>Total : - </h1>
          </div>

            <form onSubmit={shipformik.handleSubmit}>
 
                <div className='py-5'>
                  <Input className='rounded-r-none w-[100%]' 
                    type='text'
                    label='Your Name'
                    name='name' onChange={shipformik.handleChange} value={shipformik.values.name} />
                </div>

                <div className='py-5'>
                  <Input className='rounded-r-none w-[100%]' 
                    type='text'
                    label='Shipping Address'
                    name='address' onChange={shipformik.handleChange} value={shipformik.values.address} />
                </div>

                <div className='py-5'>
                  <Input className='rounded-r-none w-[100%]' 
                    type='tel'
                    label='Contact Number'
                    name='contact'  onChange={shipformik.handleChange} value={shipformik.values.contact} />
                </div>


{/* 
                <div className='py-5'>
                  <Input className='rounded-r-none w-[100%]' 
                    type='text'
                    label='Shipping Address'
                    name='shipping' />
                </div> */}

                <Button type='submit'>Proceed To Checkout</Button>
            </form>



        </div>


      </div>
      
          :

          <h1>Empty Cart</h1>


      }
          

    </div>
    

    
    <Footer />
    
    </>
  )
}

export default Cart