import React, { useState } from 'react'
import { GiClothes } from "react-icons/gi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
const Navbar = () => {

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Productos", path: "/productos" },
    { name: "Carrito", path: "/carrito" },
    // {name: "Nosotros", path: "/nosotros"},
    // {name: "Contacto", path: "/contacto"},
  ]

  const [open, setOpen] = useState(false)

  return (
    // <div className='shadow-md max-w-7xl jus fixed top-0 left-0'>
    //   <div className='md:flex items-center justify-between py-4 md:px-10 px-7 bg-white'>
    //     {/* LOGO */}
    //     <div className='font-bold flex items-center text-2xl cursor-pointer gap-1'>
    //       <GiClothes className='w-10 h-10 text-blue-500' />
    //       <span>Todo Moda</span>
    //     </div>
    //     {/* {HAMBURGER ICON MENU ICONS} */}
    //     <div onClick={() => setOpen(!open)} className='w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden'>
    //       {
    //         open ? <IoCloseOutline /> : <HiBars3BottomRight />
    //       }
    //     </div>
    //     {/* {nav links } */}
    //     <ul className={ `md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all bg-white duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}` }>
    //       {
    //         navLinks.map(({ name, path }) => ( 
    //           <Link to={path} key={name} onClick={() => setOpen(false)}>
    //             <li className='md:ml-8 md:my-0 my-7 font-semibold text-gray-800 hover:text-blue-400 duration-500' >
    //               {name}
    //             </li>
    //           </Link>
    //         ))
    //       }
    //       <button className='btn bg-blue-500 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>Iniciar Sesion</button>
    //     </ul>
    //   </div>
    // </div>


    // {/* nav links mobile */}
    // <ul className={`bg-black text-white px-4 py-2 rounded ${open ? '' : 'hidden'}`}>
    //       {
    //         navLinks.map(({ name, path }) => (
    //           <Link to={path} key={name}>
    //             <li className='hover:text-orange-500 my-3 cursor-pointer'>
    //               {name}
    //             </li>
    //           </Link>
    //         ))
    //       }
    //     </ul>

    <header className='max-w-screen-2xl xl:px-28 px-4 mx-auto'>
      <nav className='flex items-center justify-between container md:py-4 pt-6 pb-3'>
        {/* LOGO */}
        <Link to={'/'}>
          <div className='font-semibold flex items-center text-2xl cursor-pointer gap-1'>
              <GiClothes className='w-10 h-10 text-rose-400' />
              <span>Todo Moda</span>
          </div>
        </Link>
      {/* {categoria items links} */}
      <div className='flex items-center justify-center'>
        <ul className='sm:flex items-center justify-between text-black text-2xl hidden'>
          {
            navLinks.map(({ name, path }) => (
              <Link to={path} key={name} >
                <li className='hover:text-rose-400 px-6 cursor-pointer'>
                  {name}
                </li>
              </Link>
            ))
          }
        </ul>
      </div>
        {/* {HAMBURGER ICON MENU ICONS navbar for sm devices} */}
        <div className='w-5 h-5 cursor-pointer sm:hidden' onClick={() => setOpen(!open)}>
          {
            open ? <IoCloseOutline /> : <HiBars3BottomRight />
          }
        </div>
      </nav>

      {/* <hr /> */}


      {/* nav links mobile */}
      <div className='sm:hidden'>
        <ul className={`bg-rose-400 text-white font-sembold px-4 py-2 rounded ${open ? '' : 'hidden'}`}>
          {
            navLinks.map(({ name, path }) => (
              <Link to={path} key={name} onClick={() => setOpen(false)}>
                <li className='hover:text-orange-500 my-3 cursor-pointer pb-1'>
                  {name}
                </li>
              </Link>
            ))
          }
        </ul>
      </div>


    </header>
  )
}

export default Navbar