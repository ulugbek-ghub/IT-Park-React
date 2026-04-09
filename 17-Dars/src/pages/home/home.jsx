import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";  // ADD THIS IMPORT
import axios from "axios";
import { useCart } from "../../context/cartContext.jsx";
import dron1 from "./дрон 1.png";
import rasm from "./fire_1f525 1.png";
import apka from "./portrait-cheerful-attractive-young-woman-longsleeve-standing-with-arms-crossed-smiling_adobespark 2.png";
import ggg from "./Arrow 18 (Stroke).png";
import './home.css';
import rasm1 from './дрон 1.png';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      setLoading(true);
      const res = await axios.get('https://e-commerce-api-v2.nt.azimumarov.uz/api/v1/products');
      console.log("API Response:", res.data);

      const productData = res.data.products || [];
      console.log("Extracted products:", productData);

      setProducts(productData);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching products:', err);
      setError('Failed to load products: ' + err.message);
      setLoading(false);
    }
  }

  const getBadge = (product) => {
    if (product.isHit || product.rating > 4.5) return "ХИТ";
    return "Новинка";
  };

  const formatPrice = (price) => {
    if (!price) return "0";
    return new Intl.NumberFormat('ru-RU').format(price);
  };

  if (loading) {
    return <div style={{ padding: "50px", textAlign: "center" }}>Loading products...</div>;
  }

  if (error) {
    return <div style={{ color: "red", padding: "20px" }}>{error}</div>;
  }

  return (
    <div className="dash">
      <div className="bob">
        <div>
          <img src={dron1} alt="dron" />
        </div>
        <div className="iooi">
          <span className="ll">
            <button>Акция</button>
          </span>
          <h2>
            До 01.09 бесплатная <br />
            доставка самокатов по <br />
            всей России
          </h2>
          <span className="ss">
            <button>Подробнее</button>
          </span>
        </div>
      </div>

      <h1>Фильтр</h1>

      <section className="catalog">
        <div className="left">
          <div className="rr">
            <div className="tt">
              <h3>Цена</h3>
              <input type="range" />
              <div className="hh">
                <input type="text" defaultValue={0} />
                <span>--</span>
                <input type="text" defaultValue={5000} />
              </div>
              <div className="ii1">
                <h3>Тип</h3>
                <div><input type="checkbox" /><label>Внедорожный</label></div>
                <div><input type="checkbox" /><label>Городской</label></div>
                <div><input type="checkbox" /><label>Зимний</label></div>
                <h3>Для кого</h3>
                <div><input type="checkbox" /><label>Для взрослого</label></div>
                <div><input type="checkbox" /><label>Для ребенка</label></div>
                <div><input type="checkbox" /><label>Для пенсионера</label></div>
                <h3>Вес</h3>
                <div><input type="checkbox" /><label>Легкие (до 15 кг)</label></div>
                <div><input type="checkbox" /><label>Средние (15-30 кг)</label></div>
                <div><input type="checkbox" /><label>Тяжелые (свыше 30 кг)</label></div>
                <h4>Показать весь фильтр <img src={ggg} alt="" /></h4>
              </div>
            </div>
          </div>

          <div className="uu">
            <div><img src={rasm} alt="" /> Товар месяца</div>
            <hr />
            <div className="flex-uu">
              <div className="pp">
                <img src={rasm1} alt="" />
              </div>
              <div>
                <h2>Kugoo Kirin M4</h2>
                <h3>29 900 ₽</h3>
              </div>
            </div>
          </div>

          <div className="uu2">
            <div><img src={apka} alt="" /></div>
            <div>
              <h3>Задать вопрос менеджеру</h3>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="products-grid">
            {products.map((p) => (
              <Link
                to={`/product/${p._id}`}
                key={p._id}
                className="product-card-link"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div className="product-card">
                  <span className={`product-badge ${getBadge(p) === "ХИТ" ? "badge-hit" : "badge-new"}`}>
                    {getBadge(p)}
                  </span>
                  <div className="product-image">
                    <img src={p.pictures?.[0] || rasm1} alt={p.name} />
                  </div>
                  <b className="product-name">{p.name}</b>
                  <div className="product-features">
                    <span>{p.battery || "2000 mAh"}</span>
                    <span>{p.speed || "60 км/ч"}</span>
                    <span>{p.power || "1,2 л.с."}</span>
                    <span>{p.time || "5 часов"}</span>
                  </div>
                  <div className="product-price">
                    <span className="old-price">{formatPrice(p.price)} ₽</span>
                    <b className="new-price">{formatPrice(p.price - 10)} ₽</b>
                  </div>
                  <div className="product-actions">
                    <button
                      className="buy-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(p);
                      }}
                    >
                      Купить в 1 клик
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;