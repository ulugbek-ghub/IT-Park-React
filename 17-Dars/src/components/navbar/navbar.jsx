import React from "react"
import V1ector from "./V1ector.png"
import Vector from "./Vector.png"
import Vector1 from "./Vector (1).png"
import Vector2 from "./Vector (2).png"
import Vector3 from "./Vector (3).png"

const Navbar = () => {
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

      <div className="main-bar">
        <span className="logo">KUGOO</span>
        <div className="search-box">
          <input type="text" placeholder="Искать самокат KUGO" />
          <button><img src={V1ector} alt="" /></button>
        </div>
        <div className="cart">
          <span><img src={Vector3} alt="" /></span>
          <span>Корзина</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar