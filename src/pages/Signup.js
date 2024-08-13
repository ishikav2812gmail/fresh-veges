import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SiVega } from "react-icons/si";
import { registerRedux } from '../store/userSlice';
import { useDispatch } from 'react-redux';
function Signup() {
  const [data,setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleOnChange =(e) => {
    const { name ,value } =e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };
const dispatch = useDispatch();
 const navigate = useNavigate();
  const handleSubmit = (e)=>{
    e.preventDefault();
   const {name,email,password} = data;
   if(name && email && password){
    alert("user added successfully")
    dispatch(registerRedux(data))
    navigate("/user")
   }
   else{
    alert("please fill all the fields")
   }
  }
  return (
    
    <div className='flex flex-col'>
      <div className='relative flex justify-center items-center'>
        <img className="w-full h-[350px] object-cover" src="https://www.naturefresh.ca/wp-content/uploads/choosing-the-best-vegetables.jpg"/>
        <div className='absolute bg-black bg-opacity-50'>
            <span className='text-4xl text-white font-bold py-2 px-4 rounded'>Signup</span>
        </div>
      </div>
      <div className='flex justify-center p-10'>
      <div className='flex flex-col justify-center items-center border-2 border-slate-500 w-[400px]'>
        <Link to={"/"}>
        <div className='flex items-center gap-2 text-xl p-6'>< SiVega/>
        <span className='text-3xl font-bold'>Veges</span>
        </div></Link>
        <span className='text-lg font semibold p-3'>Create your account</span>
        <form className='flex flex-col gap-5 w-full px-6' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-2'>
            <span className='text-lg font-semibold'>Name</span>
            <input className="focus:outline-none border-2 border-slate-400 rounded-md px-2 py-1" type="name" 
            name="name"
            value={data.name}
            onChange={handleOnChange}
            placeholder="your name"/>
          </div>
          <div className='flex flex-col gap-2'>
            <span className='text-lg font-semibold'>Email</span>
            <input className="focus:outline-none border-2 border-slate-400 rounded-md px-2 py-1" type="email"
             name="email"
             value={data.email}
             onChange={handleOnChange}
            placeholder="your email"/>
          </div>
          <div className='flex flex-col gap-2'>
            <span className='text-lg font-semibold'>Password</span>
            <input className="focus:outline-none border-2 border-slate-400 rounded-md px-2 py-1" type="password" 
             name="password"
             value={data.password}
             onChange={handleOnChange}
            placeholder="your password"/>
          </div>
          <button className='bg-blue-500 rounded-md py-1 font-semibold text-lg'>Register</button>
          <span>Already have an account?<Link to="/user"><span className='text-blue-500'>Login</span></Link></span>
        </form>
      </div>

      </div>
    </div>
  )
}

export default Signup
