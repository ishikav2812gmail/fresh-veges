import React from 'react'
import { SiVega } from "react-icons/si";
import { IoHome } from "react-icons/io5";
import { IoLogIn } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Header() {
  const userData = useSelector((state=>state.users))
  console.log(userData);

  const  basketData= useSelector((state)=>state.basket.basket)
  console.log(basketData);
  return (
    <div><div className=' flex pl-64 pr-64 pt-5 bg-blue-500 justify-between'>
      <div className='flex gap-2 text-xl pb-3 items-center'><SiVega/>
      <span className='text-2xl font-extrabold'>Veges</span>
      </div>
      
      <div className='flex gap-10 text-xl '>
        <li>{userData.name ? (<span>Hello {userData.name}</span>) : (<span>Hello Guest</span>)}</li>
      <Link className='hover:scale-150 duration-300' to="/"> <IoHome /></Link> 
       <Link  className='hover:scale-150 duration-300'to="/signup"><IoLogIn/></Link> 
        <Link className='hover:scale-150 duration-300' to="/user"><FaUser/></Link>
        <div className='relative flex justify-center itmes-center hover:scale-150 duration-300'>
       <Link className='' to="/cart"><FaShoppingCart/></Link>
       <div className='absolute bg-red-400 rounded-full h-5 w-5 flex justify-center items-center top-[-10px] right-[-10px]'>
        <span className='text-white text-sm font-semibold'>{basketData.length}</span>
       </div>
       </div>
      </div>
      
      </div>
    </div>
  )
}

export default Header
