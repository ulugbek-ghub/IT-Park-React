import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../../context/cartContext.jsx';
import './product-detail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    getProduct();
  }, [id]);

  async function getProduct() {
    try {
      const res = await axios.get(`https://e-commerce-api-v2.nt.azimumarov.uz/api/v1/products/${id}`);
      setProduct(res.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching product:', err);
      setLoading(false);
    }
  }

  const handleBuyNow = () => {
    addToCart(product);
    alert('Added to cart!');
  };

  const handleAddToCart = () => {
    addToCart(product);
    alert('Added to cart!');
  };

  if (loading) return <div style={{ padding: 50 }}>Loading...</div>;
  if (!product) return <div style={{ padding: 50 }}>Product not found</div>;

  return (
    <div className="product-detail">
      <div className="product-images">
        <img src={product.pictures?.[0]} alt={product.name} className="main-image" />
      </div>
      
      <div className="product-info">
        <h1>{product.name}</h1>
        <div className="price">{product.price?.toLocaleString()} ₽</div>
        
        <div className="specs">
          <p><strong>Battery:</strong> {product.battery || "2000 mAh"}</p>
          <p><strong>Speed:</strong> {product.speed || "60 км/ч"}</p>
          <p><strong>Power:</strong> {product.power || "1.2 л.с."}</p>
        </div>

        <div className="actions">
          <button className="buy-btn" onClick={handleBuyNow}>
            Купить в 1 клик
          </button>
          <button className="cart-btn" onClick={handleAddToCart}>
            Добавить в корзину
          </button>
        </div>
        
        <Link to="/">← Back to catalog</Link>
      </div>
    </div>
  );
};

export default ProductDetail;