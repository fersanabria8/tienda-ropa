import React from 'react'
import Category from '../components/Category'
import Products from '../components/Products'
import BestSellers from '../components/BestSellers'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <>

    <div className='max-w-screen-2xl mx-auto '>
      <div className='max-h-[850px] relative'>
        {/* IMAGEN */}
        <div className='absolute w-full h-full text-gray-200 max-h-[850px] bg-black/30 flex flex-col justify-center'>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Todo <span className='text-orange-600'>Moda</span></h1>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'><span className='text-orange-600'>Todos </span>los Talles</h1>
        </div>
        <img src="https://images.pexels.com/photos/8499390/pexels-photo-8499390.jpeg" alt=""  className='w-full max-h-[850px] object-cover'/>
      </div>
    </div>
    <Category />
    <Products />
    <BestSellers />
    <Newsletter />
    </>
  )
}

export default Home