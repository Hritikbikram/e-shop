import React from 'react';
import {  Option, Select } from '@material-tailwind/react';
import { useFormik } from 'formik';


const Categoryform = (data) => {

  


  const formik= useFormik({
    initialValues:{
      categories:''
    },
    onSubmit:(
      values
    )=>{
      console.log(values)
    }
  })

  console.log(data);


  return (
    <>
    
    <form onSubmit={formik.handleSubmit}>
                      <div className='grid grid-cols-3 md:grid md:grid-cols-1 gap-4'>



                        <div>
                          <p>Categories : </p>
                          
                          {data?.length !== 0 &&
                          
                          <Select label="Category" name='categories' onChange={(e)=>formik.setFieldValue('categories',e)} >
                            
                             {data.map((catdata,index)=>{

                              return (
                              <Option value={catdata} key={index}>{catdata}</Option>
                              )

                             })} 
                                
                            
                          </Select>

                          }
                          
                        </div>


                        <div>
                          <p>Sort By : </p>
                          <Select label="Sort By">

                            <Option>Price</Option>
                            <Option>Popular</Option>
                            

                          </Select>
                        </div>

                        <div>
                          <p>View:</p>
                          <Select label="Sort By">

                            <Option>Price</Option>
                            <Option>Popular</Option>
                            

                          </Select>
                          
                          
                        </div>


                      </div>
                    </form>
    
    </>
  )
}

export default Categoryform