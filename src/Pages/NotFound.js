import React from 'react';
import { Breadcrumbs} from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';
import Footer from '../Components/Footer';

const NotFound = () => {
  return (
    <>


                          
        <div className='bg-gray-100'>


            <div className=' py-[6%] pl-[12%]'>

              <h1 className='text-3xl font-bold pb-5'>404 Not Found</h1>
              
              
              
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
                <NavLink href="#">404 Not Found</NavLink>
              </Breadcrumbs>

            </div>


        </div>

    
        <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_2ibpmsby.json"  background="transparent"  speed="1"   loop className="w-10" ></lottie-player>

        <Footer />

    </>
  )
}

export default NotFound