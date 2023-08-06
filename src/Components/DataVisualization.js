import React from 'react';

import {  Bar, Doughnut  } from 'react-chartjs-2';
import 'chart.js/auto';
import Footer from './Footer';
import { useGetAllProductsQuery } from '../Features/EcommerceApi';
import { useNavigate } from 'react-router';


export const DataVisualization = () => {

  const nav=useNavigate();

  if(localStorage.getItem("isAdmin")!== "admin")
  {
    nav('/');
    console.clear();

  }


  const { data, isLoading } = useGetAllProductsQuery();
    if (isLoading) {
        return <div className='w-[32%] mx-auto mt-14'>
            <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_x62chJ.json" background="transparent" speed="1" loop autoplay></lottie-player>
        </div>
    }
    const products = data.products;

    const productNames = products?.map((product) => product.title) || [];
    const productStocks = products?.map((product) => product.stock) || [];
    const productRatings = products?.map((product) => product.rating) || [];

    const filteredProducts = products.filter((product) => product.rating >= 1 && product.rating <= 5);

    const filterProductNames = filteredProducts.map((product) => product.title);
    const filterProductRatings = filteredProducts.map((product) => product.rating);
    console.log(productNames)
    const barChartData = {
        labels: productNames,
        datasets: [
            {
                label: 'Product Stock',
                data: productStocks,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    };

    const pieChartData = {
        labels: filterProductNames,
        datasets: [
            {
                label: 'Product Rating',
                data: filterProductRatings,
                backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)'],
            },
        ],
    };




  return (
    <>


      {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div className='p-[10%]'>
                    <div>
                        <h2 className='text-xl font-bold'>Product Popularity Chart</h2>
                        <Bar data={barChartData}/>
                    </div>
                    <div>
                        <h2 className='text-xl font-bold'>Product Popularity Chart</h2>
                        <Doughnut data={pieChartData}/>
                    </div>
                </div>
            )}



      <Footer/>
    </>
  )
}
