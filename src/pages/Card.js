import React from 'react'

const Card = () => {
  return (
    <div className='w-80  border-2 border-slate-600'>
      
      <img src="https://www.tasteofhome.com/wp-content/uploads/2019/05/mangos-shutterstock_1090910984.jpg?fit=700%2C700"/>
      <div>
        <p>Fruits</p>
        <p>Fresh Mango</p>

      </div>
      <p>₹250</p>
      <button className='bg-green-500 py-1 px-4 rounded-lg'>Add to cart</button>
    </div>
  )
}

export default Card
