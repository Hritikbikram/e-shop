import React from 'react';
import { Breadcrumbs,  Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react';
import { NavLink, useNavigate } from 'react-router-dom';

import product1 from '../Images/product1.png';
import Footer from '../Components/Footer';
import { useGetAllBlogsQuery } from '../Features/EcommerceApi';


const Blog = () => {


  const nav=useNavigate();

  const {data,isLoading}=useGetAllBlogsQuery();
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

            <h1 className='text-3xl font-bold pb-5'>Blogs</h1>
            
            
            
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
              <NavLink href="#">All Blogs</NavLink>
            </Breadcrumbs>

          </div>


        </div>




          {/* Blogs */}


    <div className='px-[10%]  py-[1%]'>

        <h1  className='text-3xl font-bold py-[5%] text-center'>Our Blogs</h1>

        <div className='grid gap-4 grid-cols-3  md:grid md:grid-cols-1'>


          {data?.posts && data?.posts.map((blog,index)=>{
            if(index<5)
            {

            return (


              

              
              

              
                <div key={blog?.id} className='my-10'>


                <Card className='overflow-hidden'>

                    <CardHeader floated={false}
                      shadow={false}
                      color="transparent"
                      className="m-0 rounded-none">
                      
                    <img src={product1} alt='Blog pic'    className="w-full h-full object-cover" />

                    </CardHeader>


                    <CardBody className='pt-8'>

                      <Typography variant="h4" color="blue-gray">
                        {blog?.title.substring(0,25).concat('...')}
                      </Typography>

                      <Typography variant="lead" color="gray" className="mt-3 pt-4 font-normal" maxLength={11}>
                        {blog?.body.substring(0,100).concat('...')}
                      </Typography>


                    </CardBody>

                    <CardFooter>
                      
                      <div onClick={()=>nav(`/single_blog/${blog?.id}`)} className="hover:text-orange-600 duration-500 text-lg" to='/single_blog' >Read More</div>

                    </CardFooter>




                </Card>

                </div>

              
              
            )}

            else {
              return null
            }

            }

            
          )}


{/* 
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

          </div> */}



{/* 
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

          </div> */}






        </div>


    </div>



{/* Blogs End */}


      <Footer />


    </>
  )
}

export default Blog