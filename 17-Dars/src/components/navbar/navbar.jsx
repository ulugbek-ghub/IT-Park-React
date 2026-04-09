import React from "react"
import { Link } from "react-router-dom"
import { useCart } from "../../context/cartContext.jsx"
import V1ector from "./V1ector.png"
import Vector from "./Vector.png"
import Vector1 from "./Vector (1).png"
import Vector2 from "./Vector (2).png"
import Vector3 from "./Vector (3).png"
import './navbar.css'

const Navbar = () => {
  const { itemCount } = useCart()

  return (
    <div>
      <div className="top-bar">
        <div className="links">
          <a href="#">Сервис</a>
          <a href="#">Сотрудничество</a>
          <a href="#">Заказать звонок</a>
          <div className="icons">
            <span><img src={Vector} alt="" /></span>
            <span><img src={Vector1} alt="" /></span>
            <span><img src={Vector2} alt="" /></span>
          </div>
        </div>
        <span>+7 (800) 505-54-61</span>
      </div>

      <div className="navbar">
        <div className="main-bar">
          <Link to="/" className="logo" style={{ textDecoration: 'none', color: 'inherit' }}>
            KUGOO
          </Link>
          <div className="search-box">
            <input type="text" placeholder="Искать самокат KUGO" />
            <button><img src={V1ector} alt="" /></button>
          </div>

          <Link to="/cart" className="cart" style={{ textDecoration: 'none', color: 'inherit', position: 'relative' }}>
            <span><img src={Vector3} alt="" /></span>
            <span>Корзина</span>
            {itemCount > 0 && (
              <span className="cart-badge" style={{
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                background: '#6b7cff',
                color: 'white',
                borderRadius: '50%',
                width: '20px',
                height: '20px',
                fontSize: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Navbar