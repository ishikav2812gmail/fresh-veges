import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCartRedux } from '../store/basketSlice';
function Product({id,image,category,name,sellingprice,price}){
  const dispatch = useDispatch();
  const handleaddToCart = ()=>{
    dispatch(addToCartRedux({
      id,
      image,
      category,
      name,
      sellingprice,
      price,
    }))
  }
  return (
    <div className='w-80 bg-white shadow-md rounded-xl flex flex-col p-2 mt-10 hover:scale-105 hover:shadow-xl duration-300'>
      <img className="h-80 w-80 object-cover rounded-t-md" src={image}/>
      <div className='px-4 py-3 w-80'>
        <span className='text-gray-400 mr-4 uppercase text-sm'>{category}</span>
        <p className='text-lg font-bold text-black capitalized block truncate'>{name}</p>
        <div className='flex items-center gap-4'>
            <p className='text-lg font-bold text-black my-3'>₹{sellingprice}</p>
            <del>
                <p className='text-sm text-gray-500 ml-2'>₹{price}</p>
            </del>
          
        </div>
        <button onClick={handleaddToCart} className='py-2 bg-blue-500 rounded-md w-72 flex font-semibold items-center justify-center text-xl hover:bg-green-300 duration-300'>
          <FaShoppingCart/>
          Add to cart</button>
      </div>
    </div>
  )
}

export default Product
