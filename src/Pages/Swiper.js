import React from 'react';
import { Carousel } from '@material-tailwind/react';


const Swiper = () => {
  return (
    <>


 

    <div className="w-[100%] h-[500px]">


    <Carousel loop >
      <img
        src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        alt="Slide1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1573855619003-97b4799dcd8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        alt="Slide2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1570032686516-2fe01ea09f5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        alt="Slide3"
        className="h-full w-full object-cover"
      />
    </Carousel>

    </div>






    
    </>
  )
}

export default Swiper