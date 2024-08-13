import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { PlaceOrderRedux } from '../store/orderSlice';
function Checkout() {
     const [data,setData] = useState({
      firstname: " ",
      lastname: " ",
      address: ' ',
      state: " ",
      city: " ",
      zipcode: " ",
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
 const dispatch = useDispatch()
    const basketData = useSelector((state) => state.basket.basket)
    const basketTotalValue = basketData.reduce((total,item)=>{
        return total +(item.sellingprice*item.qty)
      },0)
      const baskeTotalValue = basketData.reduce((total,item,gst)=>{
        return gst+(total +(item.sellingprice*item.qty))
      },100)

      const handlePlaceOrder = ()=>{
        const {firstname,lastname,address,state,city,zipcode}=data
       if(firstname&&lastname&&address&&state&&city&&zipcode){
        dispatch(PlaceOrderRedux({data,basketData,basketTotalValue, baskeTotalValue}))
       }
       else{
        alert("please provide shipping details first");
       }
      }
  return (
    <div className='bg-gray-100'>
      <div className='w-full max-w-3xl mx-auto'>
        <div className='bg-white p-8 rounded-lg shadow-md border'>
            <h1 className='text-2xl font-bold mb-4'>Checkout</h1>
            <div className='mb-6'>
                <h2 className='text-xl font-semibold text-gray-700 mb-2'>Shipping Address</h2>
                <div className='grid grid-cols-2 gap-4'>
                    <div>
                        <label for='first' className='block text-gray-700 mb-1'>First Name</label>
                        <input type="text"  id='first' name="firstname" value={data.firstname}  onChange={handleOnChange} placeholder='your first name'  className='w-full rounded-lg border py-2 px-3  border-black'/>
                    </div>

                    <div>
                        <label for='last' className='block text-gray-700 mb-1'>Last Name</label>
                        <input type="text"  id='last' name="lastname" value={data.lastname} onChange={handleOnChange} placeholder='your last name' className='w-full rounded-lg border py-2 px-3 border-black'/>
                    </div>
                </div>

                <div>
                    <label for="address" className='block text-gray-700 mb-1'>Address</label>
                    <input className='w-full rounded-lg border py-2 px-3 border-black' type='text' id='address' name="address" value={data.address} onChange={handleOnChange} />
                </div>
                <div className=''>
                    <label for="city" className='block  text-gray-700  mb-1 mt-4'>City</label>
                    <input className='w-full rounded-lg border py-2 px-3 border-black' type='text' id='city' name="city" value={data.city} onChange={handleOnChange}  />
                </div>
                <div className='grid grid-cols-2 gap-4 mt-4'>
                    <div>
                        <label for='state' className='block text-gray-700  mb-1'>State</label>
                        <input type="text"  id='address' name="state" value={data.state} onChange={handleOnChange} placeholder='your address' className='w-full rounded-lg border py-2 px-3 border-black'/>
                    </div>

                    <div>
                        <label for='zip' className='block text-gray-700 mb-1'>Zip Code</label>
                        <input type="text"  id='zip' name="zipcode" value={data.zipcode}  onChange={handleOnChange} placeholder='your zip' className='w-full rounded-lg border py-2 px-3 border-black'/>
                    </div>
                </div>
            </div>
            <div>
                <h2>Shopping Cart Items</h2>
                <div className='bg-white rounded-lg shadow-xl p-6 mb-4 '>
          <table  className='w-full'>

            <thead>
              <tr>
                <th className='text-left font-semibold'>Product</th>

                <th className='text-left font-semibold'>Quantity</th>
                <th className='text-left font-semibold'>Total</th>
                
              </tr>
            </thead>
            <tbody>
              {
                basketData.map((item) => (<tr key={item.id}>
                  <td className='py-4'>
                    <div className='flex items-center'>
                      <img className="h-16 w-16 object-cover rounded-md" src={item.image} />
                      <span className='font-semibold ml-2'>{item.name}</span>
                    </div>
                  </td>

                  <td className='py-4'>
                    <div className='flex items-center'>
                      
                      <span className='text-center w-8'>{item.qty}</span>
                     
                    </div>
                  </td >
                  <td className='py-4'>{item.total}</td>
                  
                </tr>))
              }
            </tbody>

          </table>

        </div>
        <div className='flex justify-between items-center mt-7'>       <Link to={'/cart'}>
        <button className=' bg-indigo-500 px-4 py-2 rounded-lg hover:bg-indigo-700 text-white font-bold'>Edit Shopping List</button></Link>
        <span className='font-light'>Total (₹{basketTotalValue.toFixed(2)}) + gst(₹{100})</span>
        </div>
        <div className='flex justify-between items-center mt-7'>
     
            <div>
          <span className='text-gray-600 font-semibold mr-4'>Subtotal :</span>
    
          <span className='text-xl font-bold'> ₹{baskeTotalValue.toFixed(2)}</span>
        </div>
        <div>
        <button  onClick={handlePlaceOrder} className='bg-indigo-500 text-lg px-4 py-2 rounded-lg hover:bg-indigo-700 text-white font-bold'>Place Order</button>
        </div>
        </div>
     
            </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
