import { Breadcrumbs, Button, Input, Textarea } from '@material-tailwind/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import contact from '../Images/contact.png';
import Footer from '../Components/Footer';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addContactDetail } from '../Features/InfoSlice';

const Contact = () => {

  const dispatch=useDispatch();


  const contdata=useFormik({
    initialValues:{
      
      conname:'',
      conmail:'',
      conphone:'',
      consub:'',
      conmsg:''
      

    },
    onSubmit:(values,{resetForm})=>{
      console.log(values);

      dispatch(addContactDetail(values));
      


      
      // resetForm();
    },
  })

  const data=useSelector((store)=>store.contact.contactDetail);
  console.log(data);




  return (
    <>

            
        <div className='bg-gray-100'>


            <div className=' py-[6%] pl-[12%]'>

              <h1 className='text-3xl font-bold pb-5'>Contact Us</h1>
              
              
              
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
                <NavLink href="#">Contact Us</NavLink>
              </Breadcrumbs>

            </div>


        </div>

 


        <div className='px-[10%]'>

            <div className='grid grid-cols-2 md:grid md:grid-cols-2 gap-5'>

                <div className='py-5'>
                  <h1 className='text-2xl font-bold py-5'>Information About Us</h1>
                  <p className='text-lg '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem voluptas sequi in, minus, recusandae laboriosam mollitia blanditiis ex amet ullam maxime porro nobis labore sint. Totam voluptatum est libero numquam?</p>
                </div>

                <div className='py-5'>

                  <h1 className='text-2xl font-bold py-5'>Contact Way</h1>

                  <div className='grid grid-cols-2 md:grid md:grid-cols-1'>

                    <div className='text-lg text-gray-700'>

                        <div>
                          <p>Tel : 01-123456</p>
                          <p>Email : abc@gmail.com</p>                          
                        </div>

                        <div>
                          <p>Putalisadak, Kathmandu</p>
                             
                        </div>

                    </div>


                    

                    <div className='text-lg text-gray-700'>

                        <div>
                          <p>Support Forum</p>
                          <p>10 A.M - 10 P.M</p>                          
                        </div>

                        <div>
                          <p>Free Shipping inside the valley</p>                             
                        </div>

                    </div>




                  </div>

                </div>

            </div>

        </div>




        {/* Contact form */}



        <div className='px-[10%] py-[5%]'>

          <div className='grid grid-cols-2 md:grid md:grid-cols-1'>

            <div className='px-[8%] py-[2%] rounded-xl bg-gray-100'>


                  <h1 className='text-3xl font-bold py-5'>Get In Touch</h1>
                  <p className='text-lg '>Please fill up the form to submit your queries and get in touch with us ! ! !</p>

                  <form className='py-[2%]' onSubmit={contdata.handleSubmit}>


                    <div className='py-5'>
                      <Input label="Your Name" name="conname" className='rounded-3xl py-10' type='text' onSubmit={contdata.handleSubmit} onChange={contdata.handleChange} />
                    </div>


                    <div className='py-5'>
                      <Input label="Your Email" name="conmail" className='rounded-3xl py-10' type='email' onSubmit={contdata.handleSubmit} onChange={contdata.handleChange} />
                    </div>


                    <div className='py-5'>
                      <Input label="Phone Number" name="conphone" className='rounded-3xl py-10' type='number' onSubmit={contdata.handleSubmit} onChange={contdata.handleChange} />
                    </div>


                    <div className='py-5'>
                      <Input label="Subject" name="consub" className='rounded-3xl py-10' type='text' onSubmit={contdata.handleSubmit} onChange={contdata.handleChange} />
                    </div>


                    <div className='py-5'>

                      <Textarea  label="Your Message" name="conmsg" className='rounded-3xl py-10' type='text' onSubmit={contdata.handleSubmit} onChange={contdata.handleChange} ></Textarea>
                    </div>

                    <Button type='submit'>Submit</Button>


                  </form>

            </div>



            <div>

                <img src={contact} alt="contactus" />

            </div>

          </div>

        </div>


        <Footer />
    
    
    </>
  )
}

export default Contact