import { Routes, Route } from "react-router-dom"
import Home from "../pages/home/home.jsx"
import Cart from "../pages/cart/cart.jsx"
import ProductDetail from "../pages/product-detail/product-detail.jsx"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
  )
}

export default AppRoutes