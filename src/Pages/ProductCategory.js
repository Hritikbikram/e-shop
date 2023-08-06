import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { useGetProductsByCategoryQuery } from '../Features/EcommerceApi';
import { Breadcrumbs, Card, CardBody, CardFooter, CardHeader, Option, Select, Typography } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';

const ProductCategory = () => {

  const nav=useNavigate();
  const {categoryname}=useParams();
  const {data,isLoading}=useGetProductsByCategoryQuery(categoryname);

  console.log(data);






  
  if (isLoading) {
    return <div className='w-[32%] mx-auto mt-14'>      

        <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_p8bfn5to.json"  background="transparent"  speed="1"  loop  autoplay></lottie-player>
    </div>
}
 







  return (
    
    <>


              

      <div className='bg-gray-100'>


          <div className=' py-[6%] pl-[12%]'>

            <h1 className='text-3xl font-bold pb-5'>{categoryname}</h1>
            
            
            
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
              <NavLink href="#">{categoryname}</NavLink>
            </Breadcrumbs>

          </div>


      </div>


    


            {/* Product List */}

        
            <div>

                <div className=' px-[10%] py-[5%]'>




                    <div className="grid grid-cols-2  lg:grid lg:grid-cols-1">

                          <div className=''> 
                            <h1 className='text-3xl font-bold py-5'>Ecommerce Accesiories</h1>
                          </div>

                          <div className=''>
                            <div className='grid grid-cols-3 md:grid md:grid-cols-1 gap-4'>


                              <div>
                                <p>Categories : </p>
                                <Select label="Categories">

                                  <Option>
                                    
                                      <NavLink className="hover:text-orange-300 duration-200" to='/product'>All Products</NavLink>
                                    
                                  </Option>

                                  <Option>

                                      <NavLink className="hover:text-orange-300 duration-200" to='/category/smartphones'>SmartPhones</NavLink>
                                    
                                  </Option>

                                  <Option>

                                      <NavLink className="hover:text-orange-300 duration-200" to='/category/laptops'>Laptops</NavLink>
                                    
                                  </Option>
                                  

                                  <Option>

                                      <NavLink className="hover:text-orange-300 duration-200" to='/category/fragrances'>Fragrances</NavLink>
                                    
                                  </Option>
                                  

                                  <Option>

                                      <NavLink className="hover:text-orange-300 duration-200" to='/category/skincare'>Skincare</NavLink>
                                    
                                  </Option>
                                  
                                  

                                  <Option>

                                      <NavLink className="hover:text-orange-300 duration-200" to='/category/groceries'>Groceries</NavLink>
                                    
                                  </Option>
                                  
                                  

                                  <Option>

                                      <NavLink className="hover:text-orange-300 duration-200" to='/category/home-decoration'>Home-Decoration</NavLink>
                                    
                                  </Option>
                                  
                                  


                                </Select>
                              </div>

                              <div>
                                <p>View:</p>
                                <Select label="Sort By">

                                  <Option>Price</Option>
                                  <Option>Popular</Option>
                                  

                                </Select>
                                
                                
                              </div>


                            </div>
                          </div>

                    </div>




                    {/* Product List */}


                    <div className='py-[2%]'>




                      <div className='grid gap-6 grid-cols-3 md:grid md:grid-cols-1'>


                        {data?.products && data?.products.map((productdata,index)=>{

                          return (

                            
                          <div key={productdata?.id} className='my-10 cursor-pointer'  onClick={()=>nav(`/product_details/${productdata?.id}`)} >
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



                                        <CardFooter
                                        className='bg-blue-gray-100 text-center flex justify-evenly text-xl'>


                                          <div  onClick={()=>nav(`/product_details/${productdata?.id}`)} key={`${productdata?.id}`}  >
                                            <i className="fa-solid fa-magnifying-glass rounded-full text-center p-4 hover:bg-white duration-500 text-green-700 hover:text-orange-700 "></i>
                                            </div>

                                          <div to='/whilist' >
                                            <i className="fa-solid fa-heart text-red-700 rounded-full text-center  p-4  hover:bg-white duration-500"></i>
                                            </div>
                                            
                                        </CardFooter>


                              </Card>
                          </div>


                              )

                            }

                          )}


                      </div>



                    </div>


                  {/* Product List over */}


                </div>

            </div>


    
    
    
    
    </>
  )
}

export default ProductCategory