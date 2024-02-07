import { Route, Routes } from 'react-router-dom'
import './App.css'
import { AppNavbar } from './Components/Navbar/AppNavbar'
import { Products } from './Components/products/Products'
import { Cart } from './Components/cart/Cart'

function App() {
  

  return (
    <>
      <AppNavbar/>
      <Routes>
        <Route path='/' element={<Products/>} />
        <Route path='cart' element={<Cart/>} />
      </Routes>
    </>
  )
}

export default App
