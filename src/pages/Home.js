import React from 'react'
import Card from './Card'
import Product from './Product'

const Home = () => {
  return (
    <div className='flex flex-wrap gap-7 justify-center items-center'>
        
      <Product
      id={121}
      image={"https://www.tasteofhome.com/wp-content/uploads/2019/05/mangos-shutterstock_1090910984.jpg?fit=700%2C700"}
      name={"Fresh mango"}
      category={"Fruits"}
      sellingprice={"250"}
      price={"700"}
      />
      <Product
      id={122}
      image={"https://i2.wp.com/www.theayurveda.org/wp-content/uploads/2015/09/Carrot-fruits.jpg"}
      name={"Fresh carrots"}
      category={"Vegetables"}
    
      sellingprice={"200"}
      price={"300"}
      />
      <Product
      id={123}
      image={"https://images.news18.com/ibnlive/uploads/2021/09/kiwi-163299398516x9.jpg"}
      name={"Fresh Kiwi"}
      category={"Fruits"}
      sellingprice={"300"}
      price={"500"}

      
      />
      <Product
      id={124}
      image={"https://4.bp.blogspot.com/-81hQq5sc8R0/Uiok68HyvPI/AAAAAAAABPM/Zg3_5eLKGIk/s1600/strawberries1.jpg"}
      name={"Fresh strawberry"}
      category={"Fruits"}
      sellingprice={"250"}
      price={"400"}

      
      />
      <Product
      id={125}
      image={"https://cornvalefoods.co.uk/wp-content/uploads/2020/06/Cucumber.png"}
      name={"Fresh Cucumber"}
      category={"Vegetables"}
      sellingprice={"230"}
      price={"300"}

      
      />
      <Product
      id={126}
      image={"https://thumbs.dreamstime.com/b/fresh-sweet-lime-fruit-close-up-stock-photo-69699825.jpg"}
      name={"Sweet Lime"}
      category={"Fruits"}
      sellingprice={"200"}
      price={"300"}
      />
      <Product
      id={127}
      image={"http://3.bp.blogspot.com/-tVoQ9O2IU_E/UDzWrWgr2TI/AAAAAAAAIZ8/ojl3vvQ-XV8/s1600/Orange+Fruits+Wallpapers+1.jpg"}
      name={"Oranges"}
      category={"Fruits"}
      sellingprice={"200"}
      price={"300"}
      />
      <Product
      id={128}
      image={"https://insanelygoodrecipes.com/wp-content/uploads/2023/02/Ripe-Jackfruit-1024x1024.jpg"}
      name={"Jack Fruit"}
      category={"Vegetables"}
      sellingprice={"200"}
      price={"300"}
      />
       <Product
      id={129}
      image={"https://greenseeds.net/wp-content/uploads/2014/04/BOTTLE-GOURD-F1-612-1.jpg"}
      name={"Bottle Gourd"}
      category={"Vegetables"}
      sellingprice={"200"}
      price={"300"}
      />
        <Product
      id={130}
      image={"https://www.farmersalmanac.com/wp-content/uploads/2020/11/Adocortland_apples-as225320764.jpeg"}
      name={"Apple"}
      category={"Fruits"}
      sellingprice={"200"}
      price={"300"}
      />
        <Product
      id={131}
      image={"https://www.finedininglovers.com/sites/g/files/xknfdk626/files/2020-12/baby_potatoes%C2%A9iStock.jpg"}
      name={"Potatoes"}
      category={"Vegetables"}
      sellingprice={"200"}
      price={"300"}
      />
         <Product
      id={132}
      image={"https://static.vecteezy.com/system/resources/previews/001/397/323/large_2x/basket-of-red-onions-free-photo.JPG"}
      name={"Onions"}
      category={"Vegetables"}
      sellingprice={"200"}
      price={"300"}
      />
    </div>
  )
}

export default Home
