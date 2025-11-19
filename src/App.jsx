import {  BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Navbar from './components/Nav/Navbar'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import ProductDetails from './components/productDetails/ProductDetails'
import Cart from './components/cartItems/Cart'
import { CartProvider } from './components/context/cartContext'
import Login from './components/login/Login'
import Register from './components/login/RegisterPage'

function App() {

  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
              <Route  path='/'  element={<Home/>} />
              <Route  path='/product/:id'  element={<ProductDetails/>} />
              <Route  path='/cart'  element={<Cart/>} />
              <Route  path='/login'  element={<Login/>} />
              <Route  path='login/register'  element={<Register/>} />
        </Routes>
        <Footer/>
        </BrowserRouter>
    </CartProvider>
    </>
  )
}

export default App
