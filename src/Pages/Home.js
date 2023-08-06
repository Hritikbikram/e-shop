import React from 'react';
import Footer from '../Components/Footer'
import { NavLink, useNavigate } from 'react-router-dom';
import { Button, Card, CardBody, CardFooter, CardHeader, Input, Typography } from '@material-tailwind/react';
// import product1 from '../Images/product1.png';
// import product2 from '../Images/product2.png';
// import product3 from '../Images/product3.png';
// import product4 from '../Images/product4.png';

import delivery from '../Images/delivery.png';
import quality from '../Images/quality.png';
import cashback from '../Images/cashback.png';
import support from '../Images/support.png';
import Swiper from './Swiper';
import { useGetAllProductsQuery } from '../Features/EcommerceApi';
import BlogHome from '../Components/BlogHome';



const Home = () => {


  
  const nav =useNavigate();
  const {data,isLoading}=useGetAllProductsQuery();

  

  
  if (isLoading) {
    return <div className='w-[32%] mx-auto mt-14'>      

        <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_p8bfn5to.json"  background="transparent"  speed="1"  loop  autoplay></lottie-player>
    </div>
}

  return (
    <>

    <Swiper />

  {/* Latest Products */}



    <div>
      <h1  className='text-3xl font-bold py-[2%] text-center'>Latest Products</h1>


    

            
        <div>

            <div className='px-[10%] pb-[5%]'>





                {/* Product List */}


                  <div>




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

                      <div className='text-center'>
                         <Button onClick={()=>nav(`/product`)}   >All Products</Button>
                      </div>



                  </div>


              {/* Product List over */}


            </div>

        </div>


      </div>

  {/* Latest Products End */}




{/* Offers */}


      <div>

<h1 className='text-3xl md:text-2xl font-bold text-center'>What We Offer? ? ?</h1>

  <div className='px-[10%] py-10'>
      <div className='grid grid-cols-4 gap-3 md:grid-cols-2 sm:grid-cols-1'>

        <div className='text-center shadow-xl  p-4'>

          <img src={delivery} alt="Delivery" className='pt-10 pb-4 pl-[40%] items-center'/>

          <h3 className='text-2xl pb-4 font-bold'>Free Delivery</h3>
          <p className='pb-10 text-blue-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate est nobis incidunt ratione iure</p>



        </div>

        <div className='text-center shadow-xl  p-4'>

          <img src={cashback} alt="Delivery" className='pt-10 pb-4 pl-[40%] items-center'/>

          <h3 className='text-2xl pb-4 font-bold'>100% Cashback</h3>
          <p className='pb-10 text-blue-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate est nobis incidunt ratione iure</p>



        </div>

        <div className='text-center shadow-xl  p-4'>

          <img src={quality} alt="Delivery" className='pt-10 pb-4 pl-[40%] items-center'/>

          <h3 className='text-2xl pb-4 font-bold'>Quality Product</h3>
          <p className='pb-10 text-blue-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate est nobis incidunt ratione iure</p>



        </div>

        <div className='text-center shadow-xl  p-4'>

          <img src={support} alt="Delivery" className='pt-10 pb-4 pl-[40%] items-center'/>

          <h3 className='text-2xl pb-4 font-bold'>24/7 Support</h3>
          <p className='pb-10 text-blue-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate est nobis incidunt ratione iure</p>



        </div>

      </div>
    </div>
</div>



{/* Offers End */}







  {/* Trending Products */}



  {/* <div>
      <h1  className='text-3xl font-bold pb-5 pt-[5%] text-center'>Trending Products</h1> */}


    

            
        {/* <div> */}

            {/* <div className='px-[10%] py-[5%]'> */}





                {/* Product List */}

{/* 
                  <div>




                    <div className='grid gap-4 grid-cols-3  md:grid md:grid-cols-2'>



                    <div className='my-10'>
                        <Card>
                          
                          <CardHeader>
                          <img src={product1} alt='Product 1' className="w-full h-full object-cover"
                              />
                          </CardHeader>

                          <CardBody>
                              <div className="flex items-center justify-between mb-2">
                                <Typography color="blue-gray" className="font-medium">
                                  Product 1
                                </Typography>
                                <Typography color="blue-gray" className="font-medium">
                                  Rs. 500
                                </Typography>
                              </div>
                              <Typography variant="small" color="gray" className="font-normal opacity-75">
                                With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.
                              </Typography>
                          </CardBody>


                              <CardFooter className='bg-blue-gray-100 text-center text-xl'>

                                <NavLink to="/cart" className=' rounded-full hover:bg-white duration-500 p-4 mx-4 '>
                              <i className="fa-solid fa-shopping-cart text-blue-900"></i>
                              </NavLink>

                                <NavLink to='/product_details' className='rounded-full p-4 mx-4 hover:bg-white duration-500 text-green-700 hover:text-orange-700'>
                                  <i className="fa-solid fa-magnifying-glass "></i>
                                  </NavLink>

                                <NavLink to='/whilist' className='rounded-full p-4 mx-4 hover:bg-white duration-500'>
                                  <i className="fa-solid fa-heart text-red-700"></i>
                                  </NavLink>
                                  
                              </CardFooter>


                        </Card>
                    </div>



                    <div className='my-10'>
                        <Card>
                          
                          <CardHeader>
                          <img src={product2} alt='Product 2' className="w-full h-full object-cover"
                              />
                          </CardHeader>

                          <CardBody>
                              <div className="flex items-center justify-between mb-2">
                                <Typography color="blue-gray" className="font-medium">
                                  Product 2
                                </Typography>
                                <Typography color="blue-gray" className="font-medium">
                                  Rs. 500
                                </Typography>
                              </div>
                              <Typography variant="small" color="gray" className="font-normal opacity-75">
                                With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.
                              </Typography>
                          </CardBody>


                              <CardFooter className='bg-blue-gray-100 text-center text-xl'>

                                <NavLink to="/cart" className=' rounded-full hover:bg-white duration-500 p-4 mx-4 '>
                              <i className="fa-solid fa-shopping-cart text-blue-900"></i>
                              </NavLink>

                                <NavLink to='/product_details' className='rounded-full p-4 mx-4 hover:bg-white duration-500 text-green-700 hover:text-orange-700'>
                                  <i className="fa-solid fa-magnifying-glass "></i>
                                  </NavLink>

                                <NavLink to='/whilist' className='rounded-full p-4 mx-4 hover:bg-white duration-500'>
                                  <i className="fa-solid fa-heart text-red-700"></i>
                                  </NavLink>
                                  
                              </CardFooter>


                        </Card>
                    </div>



                    <div className='my-10'>
                        <Card>
                          
                          <CardHeader>
                          <img src={product3} alt='Product 3' className="w-full h-full object-cover"
                              />
                          </CardHeader>

                          <CardBody>
                              <div className="flex items-center justify-between mb-2">
                                <Typography color="blue-gray" className="font-medium">
                                  Product 3
                                </Typography>
                                <Typography color="blue-gray" className="font-medium">
                                  Rs. 500
                                </Typography>
                              </div>
                              <Typography variant="small" color="gray" className="font-normal opacity-75">
                                With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.
                              </Typography>
                          </CardBody>


                              <CardFooter className='bg-blue-gray-100 text-center text-xl'>

                                <NavLink to="/cart" className=' rounded-full hover:bg-white duration-500 p-4 mx-4 '>
                              <i className="fa-solid fa-shopping-cart text-blue-900"></i>
                              </NavLink>

                                <NavLink to='/product_details' className='rounded-full p-4 mx-4 hover:bg-white duration-500 text-green-700 hover:text-orange-700'>
                                  <i className="fa-solid fa-magnifying-glass "></i>
                                  </NavLink>

                                <NavLink to='/whilist' className='rounded-full p-4 mx-4 hover:bg-white duration-500'>
                                  <i className="fa-solid fa-heart text-red-700"></i>
                                  </NavLink>
                                  
                              </CardFooter>


                        </Card>
                    </div>



                    <div className='my-10'>
                        <Card>
                          
                          <CardHeader>
                          <img src={product4} alt='Product 4' className="w-full h-full object-cover"
                              />
                          </CardHeader>

                          <CardBody>
                              <div className="flex items-center justify-between mb-2">
                                <Typography color="blue-gray" className="font-medium">
                                  Product 4
                                </Typography>
                                <Typography color="blue-gray" className="font-medium">
                                  Rs. 500
                                </Typography>
                              </div>
                              <Typography variant="small" color="gray" className="font-normal opacity-75">
                                With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.
                              </Typography>
                          </CardBody>


                          <CardFooter className='bg-blue-gray-100 text-center text-xl'>

                                <NavLink to="/cart" className=' rounded-full hover:bg-white duration-500 p-4 mx-4 '>
                                <i className="fa-solid fa-shopping-cart text-blue-900"></i>
                                </NavLink>

                                <NavLink to='/product_details' className='rounded-full p-4 mx-4 hover:bg-white duration-500 text-green-700 hover:text-orange-700'>
                                  <i className="fa-solid fa-magnifying-glass "></i>
                                  </NavLink>

                                <NavLink to='/whilist' className='rounded-full p-4 mx-4 hover:bg-white duration-500'>
                                  <i className="fa-solid fa-heart text-red-700"></i>
                                  </NavLink>
                            
                          </CardFooter>


                        </Card>
                    </div>



                    <div className='my-10'>
                        <Card>
                          
                          <CardHeader>
                          <img src={product3} alt='Product 3' className="w-full h-full object-cover"
                              />
                          </CardHeader>

                          <CardBody>
                              <div className="flex items-center justify-between mb-2">
                                <Typography color="blue-gray" className="font-medium">
                                  Product 3
                                </Typography>
                                <Typography color="blue-gray" className="font-medium">
                                  Rs. 500
                                </Typography>
                              </div>
                              <Typography variant="small" color="gray" className="font-normal opacity-75">
                                With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.
                              </Typography>
                          </CardBody>


                          <CardFooter className='bg-blue-gray-100 text-center text-xl'>

                            <NavLink to="/cart" className=' rounded-full hover:bg-white duration-500 p-4 mx-4 '>
                            <i className="fa-solid fa-shopping-cart text-blue-900"></i>
                            </NavLink>

                            <NavLink to='/product_details' className='rounded-full p-4 mx-4 hover:bg-white duration-500 text-green-700 hover:text-orange-700'>
                              <i className="fa-solid fa-magnifying-glass "></i>
                              </NavLink>

                            <NavLink to='/whilist' className='rounded-full p-4 mx-4 hover:bg-white duration-500'>
                              <i className="fa-solid fa-heart text-red-700"></i>
                              </NavLink>
                          
                        </CardFooter>

                        </Card>
                    </div>

                    </div>



                  </div> */}


              {/* Product List over */}


            {/* </div> */}

        {/* </div> */}


      {/* </div> */}

  {/* Trending Products End */}




        {/* Subscribe */}


        <div className='bg-red-50'>

            <div className='text-center p-[6%]'>
              <h1 className='text-6xl md:text-3xl font-semibold'>Uniqueness & Trends</h1>
              <h1 className='text-6xl md:text-3xl font-semibold pt-3'>to your inbox</h1>

              <div className=''>

              <p className='text-3xl md:text-2xl py-[1%] '>Enjoy weekly update on products and recommendations</p>

              <div className='flex justify-center py-[1%]'>
              <div className='w-[30%]' >
                  <form action="#" className='bg-white rounded-l-sm'>
                    <Input className='border-none' type='email' label="Email Address"/>
                    
                  </form>
                  
                </div>
                <Button className=''>Subscribe</Button>
                </div>


            </div>




                  
            </div>

        </div>




  {/* Blogs */}


    <div className='px-[10%]  py-[1%]'>

      <h1  className='text-3xl font-bold py-[2%] text-center'>Our Blogs</h1>

      <BlogHome />



        <div className='text-center'>
          <Button onClick={()=>nav(`/blog`)}   >All Blogs</Button>
        </div>



    </div>



  {/* Blogs End */}




  <Footer />
    </>
  )
}

export default Home