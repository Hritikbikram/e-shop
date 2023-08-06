import React from 'react'
import { useGetAllBlogsQuery } from '../Features/EcommerceApi';
import { useNavigate } from 'react-router';
import { Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react';
import product1 from '../Images/product1.png';



const BlogHome = () => {



  const nav=useNavigate()
  const {data,isLoading}=useGetAllBlogsQuery();

  
  if (isLoading) {
    return <div className='w-[32%] mx-auto mt-14'>      

        <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_p8bfn5to.json"  background="transparent"  speed="1"  loop  autoplay></lottie-player>
    </div>
}

  return (
    <>
    
    <div className='grid gap-4 grid-cols-3  md:grid md:grid-cols-1'>


{data?.posts && data?.posts.map((blog,index)=>{
  if(index<5)
  {

  return (


    

    
    

    
      <div key={blog?.id} className='my-10 cursor-pointer' onClick={()=>nav(`/single_blog/${blog?.id}`)}>


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

    </>
  )
}

export default BlogHome