import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/cartContext.jsx';
import emptyCartImg from '../empty-cart/emptycart.png';
import './cart.css';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, total, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-container">
          <h1 className="page-title">МОЯ КОРЗИНА</h1>
          <div className="empty-cart-content">
            <img src={emptyCartImg} alt="Empty Cart" className="empty-cart-image" />
            <h2 className="empty-title">ВАША КОРЗИНА ПУСТА</h2>
            <p className="empty-subtitle">Добавьте в нее товары из каталога</p>
            <Link to="/">
              <button className="catalog-button">Перейти в каталог</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const discount = total * 0.1;
  const finalTotal = total - discount;

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1 className="page-title">МОЯ КОРЗИНА</h1>
        <p className="item-count">{cartItems.length} товара</p>

        <div className="cart-layout">
          <div className="cart-items">
            <div className="cart-header">
              <span>Товар</span>
              <span>Количество</span>
              <span>Сумма</span>
              <span onClick={clearCart} className="clear-all">Удалить все</span>
            </div>

            {cartItems.map(item => (
              <div key={item._id} className="cart-item">
                <div className="item-product">
                  <img src={item.pictures?.[0]} alt={item.name} />
                  <div className="item-info">
                    <h3>{item.name}</h3>
                    <p className="in-stock">В наличии</p>
                    <p className="gift">+ 2 подарка</p>
                  </div>
                </div>

                <div className="item-quantity">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>

                <div className="item-price">
                  <span className="current-price">{(item.price * item.quantity).toLocaleString()} ₽</span>
                </div>

                <button className="delete-btn" onClick={() => removeFromCart(item.id)}>
                  🗑️
                </button>
              </div>
            ))}
          </div>

          <div className="order-summary">
            <h3>Итого</h3>
            <div className="summary-row">
              <span>Стоимость товаров</span>
              <span>{total.toLocaleString()} ₽</span>
            </div>
            <div className="summary-row">
              <span>Сумма скидки</span>
              <span className="discount">{discount.toLocaleString()} ₽</span>
            </div>
            <div className="summary-row">
              <span>Итого без учета доставки</span>
              <span>{finalTotal.toLocaleString()} ₽</span>
            </div>
            
            <button className="checkout-btn">Оформить заказ</button>
            
            <p className="terms">
              Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и политикой конфиденциальности
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;