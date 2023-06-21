import React from 'react';
import { useFormik } from 'formik';
import { Button, Input } from '@material-tailwind/react';
import { useNavigate } from 'react-router';

const SearchDiv = () => {


  
  const searchNav= useNavigate()

  const formik=useFormik({
    initialValues:{
      search:''
    },

    onSubmit:(vals,{resetForm})=>
    {
      searchNav(`search/${vals.search}`);
      resetForm();
    }
  })


  return (
    <>

                
        <div className=' py-5 text-xl'>

          <form onSubmit={formik.handleSubmit}>
            <div className='flex '>
              <Input 
              className='rounded-r-none w-[100%]' 
              type='text'
              label='Search Item'
              name='search'
              onChange={formik.handleChange}
              value={formik.values.search}/>


              <Button className='text-lg px-5 py-1 rounded-l-none'><i className="fa-solid fa-magnifying-glass"></i></Button>
            </div>
          </form>

        </div>
    
    </>
  )
}

export default SearchDiv