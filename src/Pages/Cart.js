import React, { useState } from 'react'
import Footer from '../Components/Footer'
import { Breadcrumbs, Button, Input, Typography } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';

const Cart = () => {

  const TABLE_HEAD = ["Product Name", "Product Code", "Price", "Quantity", "Total", "Delete"];


  const [count,setCount]=useState(0);


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

      <div className='grid grid-cols-2 gap-4 md:grid md:grid-cols-1'> 
        <div>
          
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
              <tr>
                <td className='p-5'>Name</td>
                <td className='p-5'>1234</td>
                <td className='p-5'>Product Price</td>
                <td className='p-5 flex bg-gray-100'>
                  
                <button onClick={()=>{
                    setCount(count+1);
                  }}><i className="fa-solid fa-plus border text-gray-700"></i></button>

                     <p className='px-5'>{count}</p>


                  <button onClick={()=>{
                    if (count!==0)
                    {
                    setCount(count-1);
                    }
                  }}><i className="fa-solid fa-minus text-gray-700"></i></button>




                </td>
                <td className='p-5'>Rs. 500</td>
                <td className='p-5'> <i className="fa-solid fa-trash text-red-900 p-5"></i></td>
              </tr>
            </tbody>

          <tfoot className='border'>
            <tr>
              <td className='py-5'>
                <Button>Update</Button>
              </td>



            </tr>
          </tfoot>


            </table>

        </div>
 

        <div className='p-8 bg-gray-100 rounded-3xl'>

          <h1 className='text-3xl font-bold pb-5'>Shipping Details</h1>
          
          <div>
            <h1 className='font-bold text-lg'>Total : - </h1>
          </div>



            <div className='py-5'>
              <Input className='rounded-r-none w-[100%]' 
                type='text'
                label='Your Name'
                name='custname' />
            </div>

            <div className='py-5'>
              <Input className='rounded-r-none w-[100%]' 
                type='text'
                label='Shipping Address'
                name='shipping' />
            </div>

            <div className='py-5'>
              <Input className='rounded-r-none w-[100%]' 
                type='tel'
                label='Contact Number'
                name='custcontact' />
            </div>

            <div className='py-5'>
              <Input className='rounded-r-none w-[100%]' 
                type='text'
                label='Shipping Address'
                name='shipping' />
            </div>

            <Button >Proceed To Checkout</Button>
          



        </div>


      </div>

    </div>
    

    
    <Footer />
    
    </>
  )
}

export default Cart