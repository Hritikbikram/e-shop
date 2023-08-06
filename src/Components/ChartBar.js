import React from 'react'
import { Bar, Pie } from 'react-chartjs-2';

import  { Chart as ChartJS,BarElement,CategoryScale,LinearScale, ArcElement, Tooltip,Legend } from 'chart.js';
import { useSelector } from 'react-redux';
import { json } from 'react-router';

ChartJS.register(
  BarElement,CategoryScale,LinearScale,ArcElement,Tooltip,Legend
);
 

const ChartBar = () => {
 

  const shoppingdata=useSelector((store)=>store.contact.cartDetails);
    console.log(shoppingdata);

    // {shoppingdata.map((piedata,index)=>{

    // //   const data={
    // //     labels:[piedata.productpategory],
    // //     datasets:[
    // //       {
    // //         data:[3,6,9],
    // //         backgroundColor:['aqua','purple','blue']
    // //       }
    // //     ]    
    // // };


   

    // })}


     
  // const data={
  //     labels:['one','two','three'],
  //     datasets:[
  //       {
  //         data:[3,6,9],
  //         backgroundColor:['aqua','purple','blue']
  //       }
  //     ]    
  // };



  
  // console.log(localStorage.getItem('Orders'));
  const data=localStorage.getItem('Orders');
  console.log(data);
  console.log(data.orderedDate);
  const par= JSON.parse(data);
  console.log(par);
  // console.table(data.split(','));
  



  const bardata={
    labels:['one','two','three'],
    datasets:[
      {
        label:'Order Data',
        data:[3,6,9],
        backgroundColor:['aqua','purple','blue'],
        boredercolor:'black',
        borderWidth:2,
      }
    ]    
};

  const options={

  }
  return (
    <>

    <div className='px[10%] py-[5%]'>
{/*       
      <h1>Pie Chart</h1>

      <div className='w-[40%]'>
        <Pie data={data} options={options}>
          
        </Pie>
      </div> */}
      


      <h1>Bar Chart</h1>

      <div className='w-[40%]'>
        <Bar data={bardata} options={options}>
          
        </Bar>
      </div>



      
    </div>
    
    </>
  )
   
 
 
 
 
}

export default ChartBar