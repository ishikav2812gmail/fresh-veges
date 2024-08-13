import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseRedux, increaseRedux, removeRedux } from '../store/basketSlice';
import { RiDeleteBin6Fill } from "react-icons/ri";
import Lottie from 'lottie-react';
import Empty from '../assets/Empty.json'
import { useNavigate } from 'react-router-dom';
function Cart() {
  const basketData = useSelector((state) => state.basket.basket)
  console.log(basketData);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleincrease= (id)=>{
    dispatch(increaseRedux({id}))
  };
  const handledecrease= (id)=>{
    dispatch(decreaseRedux({id}))
  };
  const handleremove = (id)=>{
    dispatch(removeRedux({id}))
  };
  const basketTotalValue = basketData.reduce((total,item)=>{
    return total +(item.sellingprice*item.qty)
  },0);
  
  const handleCheckout= ()=>{
    if(basketData.length>0){
      navigate('/checkout')
    }
    else{
      alert("please add something first !!")
      navigate('/')
    }
  }
  return (
    <div className='container mx-auto px-4 py-12'>
      <div className='flex flex-col pt-10 py-5 md:items-center'>
        <h1 className='text-2xl font-bold text-center'>Shopping Cart</h1>
        <h1 className='text-xl font-semibold text-center'>Total items - ({basketData.length})</h1>
      </div>
      <div className=''>
        <div className='bg-white rounded-lg shadow-xl p-6 mb-4 '>
          <table  className='w-full'>

            <thead>
              <tr>
                <th className='text-left font-semibold'>Product</th>
                <th className='text-left font-semibold'>Price</th>
                <th className='text-left font-semibold'>Quantity</th>
                <th className='text-left font-semibold'>Total</th>
                <th className='text-left font-semibold'>Remove</th>
              </tr>
            </thead>
            <tbody>
              {basketData.length > 0 ? (
                basketData.map((item) => (<tr key={item.id}>
                  <td className='py-4'>
                    <div className='flex items-center'>
                      <img className="h-16 w-16 object-cover rounded-md" src={item.image} />
                      <span className='font-semibold ml-2'>{item.name}</span>
                    </div>
                  </td>
                  <td className='py-4'>{item.sellingprice}</td>
                  <td className='py-4'>
                    <div className='flex items-center'>
                      <button onClick={()=>handledecrease(item.id)} className='border rounded-md py-2 px-4 mr-2'>-</button>
                      <span className='text-center w-8'>{item.qty}</span>
                      <button onClick={()=>handleincrease(item.id)} className='border rounded-md py-2 px-4 mr-2'>+</button>
                    </div>
                  </td >
                  <td className='py-4'>{item.total}</td>
                  <td className='py-4'>
                    <button onClick={()=>handleremove(item.id)}  className='border rounded-md py-2 px-4 mr-2 bg-red-300 text-xl' ><RiDeleteBin6Fill />
                    </button>
                  </td>
                </tr>))
              ) : (
               <div>
                <Lottie className='w-52 h-52 ml-96'
                animationData={Empty}
                />
               </div>
              )}
            </tbody>

          </table>

        </div>
      </div>
      <div className='flex justify-between items-center mt-8'>
        <div>
          <span className='text-gray-600 font-semibold mr-4'>Subtotal :</span>
          <span className='text-xl font-bold'> ₹{basketTotalValue.toFixed(2)}</span>
        </div>
        <button onClick={handleCheckout} className='bg-indigo-500 hover:bg-indigo-700 text-white rounded-md py-2 px-4 font-bold'>Checkout</button>
      </div>
    </div>

  )
}

export default Cart
