import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { Link, Route } from 'react-router-dom';
import { BrowserRouter,Router,Routes } from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/User';
import Signup from './pages/Signup';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
function App() {
  return (
   <> 
   <BrowserRouter>
   <Header/>
   <Routes>
    < Route path="/" element={<Home/>}/>
    < Route path="/signup" element={<Signup/>}/>
    < Route path="/user" element={<User/>}/>
    < Route path="/cart" element={<Cart/>}/>

    < Route path="/checkout" element={<Checkout/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
