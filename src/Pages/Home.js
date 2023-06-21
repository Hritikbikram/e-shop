import React from 'react';
import Footer from '../Components/Footer'
import { NavLink } from 'react-router-dom';
import { Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react';
import product1 from '../Images/product1.png';
import product2 from '../Images/product2.png';
import product3 from '../Images/product3.png';
import product4 from '../Images/product4.png';

import delivery from '../Images/delivery.png';
import quality from '../Images/quality.png';
import cashback from '../Images/cashback.png';
import support from '../Images/support.png';
import Swiper from './Swiper';



const Home = () => {
  return (
    <>

    <Swiper />

  {/* Latest Products */}



    <div>
      <h1  className='text-3xl font-bold py-5 text-center'>Latest Products</h1>


    

            
        <div>

            <div className='px-[10%] py-[5%]'>





                {/* Product List */}


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



  <div>
      <h1  className='text-3xl font-bold pb-5 pt-[5%] text-center'>Trending Products</h1>


    

            
        <div>

            <div className='px-[10%] py-[5%]'>





                {/* Product List */}


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



                  </div>


              {/* Product List over */}


            </div>

        </div>


      </div>

  {/* Trending Products End */}





  {/* Blogs */}


    <div className='px-[10%]  py-[1%]'>

      <h1  className='text-3xl font-bold pb-[5%] text-center'>Our Blogs</h1>

      <div className='grid gap-4 grid-cols-3  md:grid md:grid-cols-2'>



        <div className='my-10'>


          <Card className='overflow-hidden'>

              <CardHeader floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none">
                
              <img src={product1} alt='Blog pic'    className="w-full h-full object-cover" />

              </CardHeader>


              <CardBody className='pt-8'>

                <Typography variant="h4" color="blue-gray">
                  Blog Title 1
                </Typography>

                <Typography variant="lead" color="gray" className="mt-3 pt-4 font-normal">
                  Because it&apos;s about motivating the doers. Because I&apos;m here to
                  follow my dreams and inspire others.
                </Typography>


              </CardBody>

              <CardFooter>
                
                <NavLink className="hover:text-orange-600 duration-500 text-lg" to='/single_blog' >Read More</NavLink>

              </CardFooter>




          </Card>

        </div>




        <div className='my-10'>


          <Card className='overflow-hidden'>

              <CardHeader floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none">
                
              <img src={product2} alt='Blog pic'    className="w-full h-full object-cover" />

              </CardHeader>


              <CardBody className='pt-8'>

                <Typography variant="h4" color="blue-gray">
                  Blog Title 2
                </Typography>

                <Typography variant="lead" color="gray" className="mt-3 pt-4 font-normal">
                  Because it&apos;s about motivating the doers. Because I&apos;m here to
                  follow my dreams and inspire others.
                </Typography>


              </CardBody>

              <CardFooter>
                
                <NavLink className="hover:text-orange-600 duration-500 text-lg" to='/single_blog' >Read More</NavLink>

              </CardFooter>




          </Card>

        </div>




        <div className='my-10'>


          <Card className='overflow-hidden'>

              <CardHeader floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none">
                
              <img src={product3} alt='Blog pic'    className="w-full h-full object-cover" />

              </CardHeader>


              <CardBody className='pt-8'>

                <Typography variant="h4" color="blue-gray">
                  Blog Title 3
                </Typography>

                <Typography variant="lead" color="gray" className="mt-3 pt-4 font-normal">
                  Because it&apos;s about motivating the doers. Because I&apos;m here to
                  follow my dreams and inspire others.
                </Typography>


              </CardBody>

              <CardFooter>
                
                <NavLink className="hover:text-orange-600 duration-500 text-lg" to='/single_blog' >Read More</NavLink>

              </CardFooter>




          </Card>

        </div>






      </div>
    </div>



  {/* Blogs End */}




  <Footer />
    </>
  )
}

export default Home