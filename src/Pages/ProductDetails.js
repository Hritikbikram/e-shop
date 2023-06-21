import React, { useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { Breadcrumbs, Button, Input, Textarea} from '@material-tailwind/react';
import Footer from '../Components/Footer';
import product1 from '../Images/product1.png';
import product2 from '../Images/product2.png';
import product3 from '../Images/product3.png';
import product4 from '../Images/product4.png';
import { useGetProductByidQuery } from '../Features/EcommerceApi';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const ProductDetails = () => {


    const {id}=useParams();

    const nav =useNavigate();

    const {data,isLoading}=useGetProductByidQuery(id);
    console.log(data);


    const productschema =Yup.object().shape(({
      quantity:Yup.string().required()
    }));


    const getEmail=localStorage.getItem("email");
    const getPassword=localStorage.getItem("password");
    const getUsername=localStorage.getItem("username");

  

    const [count,setCount]=useState(1);

    const productdata=useFormik({
      initialValues:{
        quantity:count,
        productid:'',
        productname:'',
        productprice:'',
        userord:''
  
  
      },
      onSubmit:(values)=>
      {

        
        values.productid=data.id;
        values.productname=data.title;
        values.productprice=data.price;
        values.userord=getUsername;
        
        if(getEmail!==null && getPassword!==null)
        {

          // localStorage.setItem("prodid",values.productid);
          // localStorage.setItem("prodname",values.productname);
          // localStorage.setItem("prodprice",values.productprice);
          // localStorage.setItem("prodquant",values.quantity);
          // localStorage.setItem("produser",values.userord);

          console.log(values);

        }
        else
        {
          nav('./Login')
        }
        
      },

      validationSchema:productschema
    })
  

    if (isLoading) {
      return <div className='w-[32%] mx-auto mt-14'>      
  
          <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_p8bfn5to.json"  background="transparent"  speed="1"  loop  autoplay></lottie-player>
      </div>
  }
  


  return (
    <>
    
        
          

    <div className='bg-gray-100'>


        <div className=' py-[6%] pl-[12%]'>

          <h1 className='text-3xl font-bold pb-5'>Product Details</h1>
          
          
          
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
            <NavLink href="#">Product Details</NavLink>
          </Breadcrumbs>

        </div>


    </div>



    <div className='px-[10%] py-[5%]'>



          
          <div className='p-5 grid grid-cols-5 md:grid md:grid-cols-1 gap-2  shadow-lg'>

          <div>

            
            <img className='py-1'src={product1} alt="Product 1" />
            <img className='py-1'src={product2} alt="Product 2" />
            <img className='py-1' src={product3} alt="Product 3" />

          </div>

          <div  className='row-span-3 col-span-2' >
            <img src={product4} className='h-[100%]' alt="Product 4" />
          </div>



            <div  className='row-span-3 col-span-2 py-[15%] px-[5%]' >

              
              <form onSubmit={productdata.handleSubmit}>


                  <h1 className='text-3xl font-bold pb-5'>{data?.title}</h1>


                  <p className='pt-[5%] font-bold'>Price : - $ {data?.price} </p>


                  <div className='py-5 flex'>
                      <i className="fa-solid fa-plus pr-3 py-3"  onClick={()=>{
                          setCount(count+1);
                          productdata.values.quantity+=1;
                        }}></i>



                      <div>
                          <Input name='quantity' value={count}  onChange={productdata.handleChange} />
                      </div>

                        <i className="fa-solid fa-minus  pl-3 py-3 text-gray-700"  onClick={()=>{
                          if (count!==1)
                          {
                          setCount(count-1);
                          productdata.values.quantity-=1;
                          }
                        }}></i>

                  </div>

                  <p className='pt-[5%] text-gray-700'>{data?.description}</p>

      

                  <div className='flex py-5'>
                    <p className='font-bold'>Categories :- {data?.category}</p>

                    <p>  </p>

                  </div>


                  <div className='pt-[10%]'>
                      <button type='submit' onClick={()=>{

                          if(getPassword === null && getEmail === null)
                          {
                            nav('../../login')
                          }


                      }} className='bg-orange-300  rounded-full hover:bg-orange-700 duration-500 p-4 mx-4 '>
                        <i className="fa-solid fa-shopping-cart text-white"></i>
                      </button>


                      <NavLink className='rounded-full p-4 mx-4 hover:bg-red-900 duration-500 bg-red-400'>
                        <i className="fa-solid fa-heart text-white"></i>
                      </NavLink>

                  </div>

                
              </form>
                
            </div>





          </div>

        








    </div>


    {/* Reviews */}

    <div className='bg-gray-100'>

      <div className='px-[10%] py-[2%]'>


        <h1 className='text-3xl font-bold pb-5'>Description</h1>


        <p className='text-gray-700'>Description</p>


      </div>

    </div>



    {/* Reviews */}

    <div>

      <div className='px-[10%] py-[2%] grid grid-cols-2 md:grid md:grid-cols-1'>
        
            <div>
              <h1 className='text-5xl font-bold pt-5'>Ratings : 5.0/5</h1>
              <i className="fa-sharp fa-solid fa-star py-5 px-2 text-yellow-500 text-3xl"></i>

              <i className="fa-sharp fa-solid fa-star py-5 px-2 text-yellow-500 text-3xl"></i>

              <i className="fa-sharp fa-solid fa-star py-5 px-2 text-yellow-500 text-3xl"></i>

              <i className="fa-sharp fa-solid fa-star py-5 px-2 text-yellow-500 text-3xl"></i>

              <i className="fa-sharp fa-solid fa-star py-5 px-2 text-yellow-500 text-3xl"></i>

            </div>


            <div>

              
              
                <h1 className='text-3xl font-bold'>Your Review</h1>

             
              <div className="w-[100%] py-5">
                <Textarea label="Message" className='text-xl'/>

                <Button className='mt-4'>Post</Button>
              </div>



            </div>

      </div>



      {/* All Reviews */}



      <div className='px-[10%] py-[2%]'>

      <hr  className=' w-[100%] pb-[1%] border-blue-gray-200' />


      <h1  className='text-3xl pb-[1%] font-bold'>All Reviews</h1>

      <hr  className='py-[1%] w-[100%] border-blue-gray-200' />


        <div>
          <h1  className='text-xl font-bold py-4'>UserName:</h1>
          <p className='text-lg'>Reviews Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis molestiae eligendi, deleniti magnam corrupti aliquam. A ipsam nemo earum maxime pariatur nam, tempore voluptas magni quod obcaecati, dolores quis asperiores!</p>
        </div>

      </div>

    </div>





    
    <Footer />

    </>
  )
}

export default ProductDetails