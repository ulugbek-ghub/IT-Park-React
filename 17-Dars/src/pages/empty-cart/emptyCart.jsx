import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import emptyCartImg from './emptycart.png';
import './emptyCart.css';

const EmptyCart = () => {
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  useEffect(() => {
    fetchRecommendations();
  }, []);

  async function fetchRecommendations() {
    try {
      const res = await axios.get('https://e-commerce-api-v2.nt.azimumarov.uz/api/v1/products?limit=4');
      setRecommendedProducts(res.data.products || []);
    } catch (err) {
      console.error('Error fetching recommendations:', err);
    }
  }

  const formatPrice = (price) => {
    if (!price) return "0";
    return new Intl.NumberFormat('ru-RU').format(price);
  };

  const getBadge = (product) => {
    if (product.isHit || product.rating > 4.5) return "ХИТ";
    return "Новинка";
  };

  return (
    <div className="empty-cart-page">
      <div className="empty-cart-container">
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

      {/* Recommended Products Section */}
      <div className="recommendations-section">
        <h2 className="recommendations-title">РЕКОМЕНДУЕМ ВАМ</h2>
        
        <div className="recommendations-grid">
          {recommendedProducts.map((product) => (
            <div key={product.id} className="product-card">
              <span className={`product-badge ${getBadge(product) === "ХИТ" ? "badge-hit" : "badge-new"}`}>
                {getBadge(product)}
              </span>
              
              <div className="product-image">
                <img src={product.pictures?.[0] || emptyCartImg} alt={product.name} />
              </div>
              
              <h3 className="product-name">{product.name}</h3>
              
              <div className="product-specs">
                <span>{product.battery || "2000 mAh"}</span>
                <span>{product.speed || "60 км/ч"}</span>
                <span>{product.power || "1,2 л.с."}</span>
                <span>{product.time || "5 часов"}</span>
              </div>
              
              <div className="product-price">
                <span className="old-price">{formatPrice(product.price)} ₽</span>
                <b className="new-price">{formatPrice(product.price - (product.price * 0.1))} ₽</b>
              </div>
              
              <button className="buy-btn">Купить в 1 клик</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;