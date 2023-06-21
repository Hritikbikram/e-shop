import React  from 'react';
import blogpic from '../Images/blog.png';
import Footer from '../Components/Footer';
import { NavLink, useParams } from 'react-router-dom';
import {  useGetBlogByIdQuery } from '../Features/EcommerceApi';

const BlogSingle = () => {

  const {blogs}=useParams();
  const {data,isLoading}=useGetBlogByIdQuery(blogs);
  console.log(data);


 fetch(`https://dummyjson.com/posts/${blogs}/comments`).then(res => res.json()).then(console.log);

            

  
  

  if (isLoading) {
    return <div className='w-[32%] mx-auto mt-14'>      

        <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_p8bfn5to.json"  background="transparent"  speed="1"  loop  autoplay></lottie-player>
    </div>
}
 

  return (
    <>

        <div>

          <div className='px-[10%] pt-[5%]'>


            <div className='grid grid-cols-3 pb-12'>
              <div className='col-span-2'>
                
                

                  <img src={blogpic} alt="Blog" className='py-5' />

                  <div className='grid grid-cols-2 text-lg'>
                      <div className='flex gap-4'>

                        <i className="fa-solid fa-pen-nib pt-2"></i>

                        <p>UserId :- {data?.id}</p>


                      </div>

                      <div className='flex gap-4'>
                        <i className="fa-regular fa-calendar-days pt-1"></i>
                        <p>June 15. 2023</p>
                      </div>

                  </div>


                  
                  <div className='py-[2%]'>

                      <h1 className='text-3xl font-bold py-5'>{data?.title}</h1>

                      <p>{data?.body}</p>

                  </div>


              </div>

              <div className='px-10 md:hidden'>

                <h1 className='text-xl font-bold py-5'>Recent Post</h1>

                <div>

                    <div className='flex gap-3 py-3'>
                      <img src={blogpic} className='w-[40%]' alt="blogs" />
                      <div>
                        <NavLink to='/blog' className='text-md font-bold'>Blog Title 1</NavLink>
                        <p className='text-gray-700'>15 June, 2023</p>
                      </div>
                      

                    </div>



                    <div className='flex gap-3'>
                      <img src={blogpic} className='w-[40%]' alt="blogs" />
                      <div>
                        <NavLink to='/blog' className='text-md font-bold'>Blog Title 2</NavLink>
                        <p className='text-gray-700'>15 June, 2023</p>
                      </div>
                      

                    </div>


                </div>


                
              </div>


            </div>

            


          </div>





        </div>



        {/* All Comments */}



      {/* All Reviews */}



      <div className='px-[10%] py-[2%]'>

      <hr  className=' w-[100%] pb-[1%] border-blue-gray-200' />


      <h1  className='text-3xl pb-[1%] font-bold'>All Comments</h1>

      <hr  className='py-[1%] w-[100%] border-blue-gray-200' />



        <div>
          <h1  className='text-xl font-bold py-1'>UserName:</h1>
          <p className='text-lg'>Reviews Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis molestiae eligendi, deleniti magnam corrupti aliquam. A ipsam nemo earum maxime pariatur nam, tempore voluptas magni quod obcaecati, dolores quis asperiores!</p>
        </div>
        

        <div>
          <h1  className='text-xl font-bold py-1'>UserName:</h1>
          <p className='text-lg'>Reviews Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis molestiae eligendi, deleniti magnam corrupti aliquam. A ipsam nemo earum maxime pariatur nam, tempore voluptas magni quod obcaecati, dolores quis asperiores!</p>
        </div>

      </div>


      <Footer />
    </>
  )
}

export default BlogSingle