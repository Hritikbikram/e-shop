import React from 'react';
import { Route, Routes } from 'react-router';
import RouteLayouts from './Pages/RouteLayouts';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Cart from './Pages/Cart';
import Faq from './Pages/Faq';
import Login from './Pages/Login';
import Fliter from './Pages/Fliter';
import Search from './Pages/Search';
import Blog from './Pages/Blog';
import BlogSingle from './Pages/BlogSingle';
import ProductDetails from './Pages/ProductDetails';
import Whilist from './Pages/Whilist';
import NotFound from './Pages/NotFound';
import DataFilter from './Pages/DataFilter';
import Comment from './Components/Comment';


const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<RouteLayouts />}>
        <Route path='/' element={<Home />} />
        
        


       

        <Route path='contact' element={<Contact />} />


        <Route path='product' element={<Fliter/>}/>


        <Route path='data' element={<DataFilter/>}/>

        




        <Route path='product_details/:id' element={<ProductDetails />}/>




        <Route path='about' element={<About />} />


        <Route path='cart' element={<Cart />} />
        
        
        <Route path='whilist' element={<Whilist />} />
        
        
        <Route path='search/:searchProduct' element={<Search />} />

        {/* <Route path='products/search/:searchProduct' element={<SearchDiv />} /> */}



        

        <Route path='FAQ' element={<Faq />} />

        <Route path='blog' element={<Blog />} />


        <Route path='single_blog/:blogs' element={<BlogSingle />} />
        
        <Route path='comments' element={<Comment />} />



        <Route path='login' element={<Login />} />



        
        <Route path='*' element={<NotFound />} />




      </Route>
    </Routes>
        

    </>
  )
}

export default App