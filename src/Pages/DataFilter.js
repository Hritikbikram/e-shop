import React from 'react'
import Footer from '../Components/Footer';
import { Breadcrumbs, Button, Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useGetAllGategoriesQuery } from '../Features/EcommerceApi';
import {  Option, Select } from '@material-tailwind/react';
import { useFormik } from 'formik';



const DataFilter = () => {



  const {data}=useGetAllGategoriesQuery();
  

  const nav=useNavigate();
  
  const formik= useFormik({
    initialValues:{
      categories:''
    },
    onSubmit:(
      values
    )=>{
      console.log(values)
    }
  })

  // console.log(data);



  



  return (
    <>

    
        <div className='bg-gray-100'>


          <div className=' py-[6%] pl-[12%]'>

            <h1 className='text-3xl font-bold pb-5'>Products</h1>
            
            
            
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
              <NavLink href="#">All Products</NavLink>
            </Breadcrumbs>

          </div>


        </div>



        {/* Categories */}


{/* Filter */}


          <div>

            <div className=' px-[10%] py-[5%]'>




              <div className="grid grid-cols-2  lg:grid lg:grid-cols-1">

                    <div className=''> 
                      <h1 className='text-3xl font-bold py-5'>Ecommerce Accesiories</h1>
                    </div>

                    {/* {data?.length !== 0 &&
                        <Categoryform data={data} />
                    } */}
                    


                    <form onSubmit={formik.handleSubmit} >
                      <div className='grid grid-cols-3 md:grid md:grid-cols-1 gap-4'>



                        <div>
                          <p>Categories : </p>
                          
                          {data?.length >= 1  &&
                          
                          <Select onSubmit={formik.handleSubmit} label="Category" name='categories' onChange={(e)=>formik.setFieldValue('categories',e)

                          //  console.log(e)
                          }   >
                            
                             {data &&  data.map((catdata,index)=>{

                              return (
                              <Option value={catdata} key={index}>{catdata}</Option>
                              )

                             })} 
                                
                            
                          </Select>


                          }
                          
                          
                        </div>


                        <div>
                          <p>Sort By : </p>
                          <Select label="Sort By">

                            <Option>Price</Option>
                            <Option>Popular</Option>
                            

                          </Select>
                        </div>

                        <div>
                        <Button className='mt-6' type='submit'>Submit</Button>
                          
                          
                        </div>


                      </div>
                    </form>

                    

              </div>
            </div>
          </div>


{/* Filter End */}






                {/* Product List */}


                <div className='py-[2%]'>




<div className='grid gap-6 grid-cols-3 md:grid md:grid-cols-1'>


{data?.products && data?.products.map((productdata,index)=>{

if(index<5){

return (

  
<div key={productdata?.id} className='my-10'>
    <Card>
      
      <CardHeader className='w-full h-[300px]'>
      <img src={`${productdata?.thumbnail}`} alt={`${productdata?.title}`} className="w-full h-full object-cover"
          />
      </CardHeader>

      <CardBody>
          <div className="flex items-center justify-between mb-2">
            <Typography color="blue-gray" className="font-medium">
            {`${productdata?.title}`}
            </Typography>
            <Typography color="blue-gray" className="font-medium">
           ${`${productdata?.price}`}
            </Typography>
          </div>
          <Typography variant="small" color="gray" className="opacity-75 font-bold">
          {`${productdata?.description.substring(0,45)}...`}
          </Typography>
      </CardBody>



              <CardFooter className='bg-blue-gray-100 text-center flex justify-evenly text-xl'>

                <div to="/cart">
              <i className="fa-solid fa-shopping-cart text-blue-900 rounded-full text-center hover:bg-white duration-500 p-4 "></i>
              </div>

                <div  onClick={()=>nav(`/product_details/${productdata?.id}`)} key={`${productdata?.id}`}  >
                  <i className="fa-solid fa-magnifying-glass rounded-full text-center p-4 hover:bg-white duration-500 text-green-700 hover:text-orange-700 "></i>
                  </div>

                <div to='/whilist' >
                  <i className="fa-solid fa-heart text-red-700 rounded-full text-center  p-4  hover:bg-white duration-500"></i>
                  </div>
                  
              </CardFooter>


    </Card>
</div>


    )}

    else
    {
      return null
    }
  }

)}







</div>



</div>


{/* Product List over */}


      <Footer />
    </>
  )
}

export default DataFilter