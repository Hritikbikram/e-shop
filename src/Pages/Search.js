import { Breadcrumbs, Card, CardBody, CardFooter, CardHeader, Option, Select, Typography } from '@material-tailwind/react';
import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSearchProductQuery } from '../Features/EcommerceApi';
import Footer from '../Components/Footer';


const Search = () => {

  const {searchProduct}=useParams();
  const {data,isLoading}=useSearchProductQuery(searchProduct);
  

  if (isLoading) {
    return <div className='w-[32%] mx-auto mt-14'>      

        <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_p8bfn5to.json"  background="transparent"  speed="1"  loop  autoplay></lottie-player>
    </div>
}
 

if(data?.products===null){
  

  

  return (

    <>

    <h1>Search Result Not Found</h1>
    <Footer/>
    
    </>

  )
  

}
  
else{


  return (
    <>

{data?.products && <div>

        <div className='bg-gray-100'>


            <div className=' py-[6%] pl-[12%]'>

              <h1 className='text-3xl font-bold pb-5'>Products List</h1>
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
                <NavLink href="#">List</NavLink>
              </Breadcrumbs>

            </div>


        </div>




        <div className='px-[10%] py-[1%]'>

            <div className="grid grid-cols-2  md:grid md:grid-cols-1">

                <div className=''> 
                  <h1 className='text-3xl font-bold py-5'>Ecommerce Accesiories</h1>
                </div>

                <div className=''>
                  <form className='grid grid-cols-3 gap-4 md:grid md:grid-cols-1 lg:grid lg:grid-cols-1'>

                    <div>
                      <p>Per Page : </p>
                      <Select label="Display">

                        <Option>10</Option>
                        <Option>20</Option>
                        

                      </Select>
                    </div>

                    <div>
                      <p>Sort By : </p>
                      <Select label="Sort By">

                        <Option>Price</Option>
                        <Option>Popular</Option>
                        

                      </Select>
                    </div>
                  </form>
                </div>

            </div>

        </div>

   




        <div>

            <div className=' px-[10%]'>







                {/* Product List */}


              <div className='py-[4%]'>





                <div className='grid gap-4 grid-cols-3  md:grid md:grid-cols-1'>


                    {data?.products && data?.products.map((searchdata,index)=>{



                          return (

                        
                            <div key={searchdata?.id} className='mb-10'>
                              <Card>
                                
                                <CardHeader className='w-full h-[300px]'>
                                <img src={searchdata?.thumbnail} alt={searchdata?.title} className="w-full h-full object-cover"
                                    />
                                </CardHeader>
    
                                <CardBody>
                                    <div className="flex items-center justify-between mb-2">
                                      <Typography color="blue-gray" className="font-medium">
                                      {searchdata?.title}
                                      </Typography>
                                      <Typography color="blue-gray" className="font-medium">
                                        ${searchdata?.price}
                                      </Typography>
                                    </div>
                                    <Typography variant="small" color="gray" className="font-normal opacity-75">
                                    {`${searchdata?.description.substring(0,45)}...`}
                                    </Typography>
                                </CardBody>
    
    
                                <CardFooter className='bg-blue-gray-100 text-center text-xl'>
    
                                  <NavLink className=' rounded-full hover:bg-white duration-500 p-4 mx-4 '>
                                    <i className="fa-solid fa-shopping-cart text-blue-900"></i>
                                    </NavLink>
    
                                  <NavLink className='rounded-full p-4 mx-4 hover:bg-white duration-500 text-green-700 hover:text-orange-700'>
                                    <i className="fa-solid fa-magnifying-glass "></i>
                                    </NavLink>
    
                                  <NavLink className='rounded-full p-4 mx-4 hover:bg-white duration-500'>
                                    <i className="fa-solid fa-heart text-red-700"></i>
                                    </NavLink>
    
                                </CardFooter>
    
    
                              </Card>
                            </div>
    
                           
                          )

                      
                    })}




                </div>



              </div>


              {/* Product List over */}


            </div>

        </div>

        </div>
}








      <Footer />

    </>
  )
}

}

export default Search