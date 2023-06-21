import { Breadcrumbs, Button, Input } from '@material-tailwind/react'
import React from 'react'
import Footer from '../Components/Footer'
import { NavLink } from 'react-router-dom'

const Faq = () => {
  return (
    <>
    
        <div className='bg-gray-100'>


              <div className=' py-[6%] pl-[12%]'>

                <h1 className='text-3xl font-bold pb-5'>FAQ</h1>
                
                
                
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
                <NavLink href="#">FAQs</NavLink>
              </Breadcrumbs>

              </div>


        </div>


        <div className='px-[12%] py-[5%]'>

          <div className='grid grid-cols-2'>

              <div>

                  <h1 className='text-4xl font-bold'>General Information</h1>


                    <div className='pt-9'>
                      <h2 className='pb-3 text-xl font-bold'>Question 1?????</h2>
                      <p className='text-gray-700'>Answer of Question 1</p>
                    </div>  


                    <div className='pt-9'>
                      <h2 className='pb-3 text-xl font-bold'>Question 2?????</h2>
                      <p className='text-gray-700'>Answer of Question 2</p>
                    </div>  


                    <div className='pt-9'>
                      <h2 className='pb-3 text-xl font-bold'>Question 3?????</h2>
                      <p className='text-gray-700'>Answer of Question 3</p>
                    </div>  


                    <div className='pt-9'>
                      <h2 className='pb-3 text-xl font-bold'>Question 4?????</h2>
                      <p className='text-gray-700'>Answer of Question 4</p>
                    </div>  



              </div>





              <div className='bg-gray-100'>

                  <h1 className='text-4xl font-bold p-[5%]'>Ask a Question</h1>
                    <form className='p-[5%]'>
                      <div className='pb-10'>
                        <Input   className='rounded bg-white' 
                                  type='text'
                                  label='Your Name*'
                                  name='name'/>


                      </div>

                      <div className='pb-10'>          
                        <Input   className='rounded-r-none bg-white' 
                                  type='text'
                                  label='Subject*'
                                  name='sub'/>

                      </div>


                      <div className='pb-10'>

                        <Input   className='rounded-r-none bg-white' 
                                  type='text'
                                  label='Your Message*'
                                  name='message'/>

                      </div>

                                <Button>Send Mail</Button>




                    </form>
              </div>

          </div>

        </div>

        <Footer />
    
    </>
  )
}

export default Faq