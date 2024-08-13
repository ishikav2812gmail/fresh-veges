import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SiVega } from "react-icons/si";
import { useDispatch, useSelector } from 'react-redux';
import { loginRedux } from '../store/loginSlice';
function User() {

  const userData = useSelector((state)=> state.users);
  console.log(userData);
  const [data, setData] = useState({
    email: "",
    password: ""
  })
  const handleOnChange = (e)=>{
       const {name,value} = e.target;
       setData((preve)=>{
        return {
          ...preve,
          [name] : value
        };
       })
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();

 
   const handleSubmit=(e)=>{
    e.preventDefault();
    const {email,password}= data;
    if(email && password){
      if(userData.email ===email && userData.password ===password){
        dispatch(loginRedux(userData))
        alert("login succss")
        navigate("/")
      }
      else{
        alert("credential does not found")
      }
    }
    else{
      alert("all the fields must be filled")
    }
  }
  return (
    <div className='flex flex-col'>
      <div className='relative flex justify-center items-center'>
        <img className="w-full h-[350px] object-cover" src="https://www.naturefresh.ca/wp-content/uploads/choosing-the-best-vegetables.jpg"/>
        <div className='absolute bg-black bg-opacity-50'>
            <span className='text-4xl text-white font-bold py-2 px-4 rounded'>Login</span>
        </div>
      </div>
      <div className='flex justify-center p-10'>
      <div className='flex flex-col justify-center items-center border-2 border-slate-500 w-[400px]'>
        <Link to={"/"}>
        <div className='flex items-center gap-2 text-xl p-6'>< SiVega/>
        <span className='text-3xl font-bold'>Veges</span>
        </div></Link>
        <span className='text-lg font semibold p-3'>Welcome back</span>
        <form className='flex flex-col gap-5 w-full px-6' onSubmit={handleSubmit}>      
              <div className='flex flex-col gap-2'>
            <span className='text-lg font-semibold'>Email</span>
            <input className="focus:outline-none border-2 border-slate-400 rounded-md px-2 py-1" type="email" value={data.email} name="email" 
            onChange={handleOnChange}
            placeholder="your email"/>
          </div>
          <div className='flex flex-col gap-2'>
            <span className='text-lg font-semibold'>Password</span>
            <input className="focus:outline-none border-2 border-slate-400 rounded-md px-2 py-1" type="password" value={data.password}
            onChange={handleOnChange}
            name="password" placeholder="your password"/>
          </div>
          <button className='bg-blue-500 rounded-md py-1 font-semibold text-lg'>Login</button>
          <span>Don't have an account?<Link to="/signup"><span className='text-blue-500'>Signup</span></Link></span>
        </form>
      </div>

      </div>
    </div>
  )
}

export default User
