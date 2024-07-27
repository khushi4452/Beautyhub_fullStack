import React from 'react';
import Navbar from "../../components/Navbar/Navbar"
import {Link} from "react-router-dom"


function Home(){
  return (
    <>

  <Navbar/>
  <div  className='flex flex-wrap justify-evenly mt-4'>
    <div>
      <img src={cosmeticImg}
      className='h-96'
      style={{ filter: "drop-shadow(1px 1px 2px #000)"}}
      />
    </div>

  <div className='mt-3 w-full sm:w-full, p-3 lg:w-1/2'>
  <h1>Welcome to the <span className='text-pink-500'>BeautyHub</span></h1>
  <div className='mt-4'>
  <p> 
  we believe everyone deserves to feel beautiful and confident
  </p>
  <p>
   Our vision is to provide the best quality ...
   </p>
   <p>
   Our mission is to offer a curated selection of premium beauty products for all your skincare..  
   </p>
   <Link to='/addproduct' className="no-underline">
   <button className="d-block mt-5 bg-pink-500 py-2 px-10 text-white rounded-lg">
   Buy Products
   </button>
   </Link>
  </div>
 
    </div>  
  </div>

    </>
  )
}