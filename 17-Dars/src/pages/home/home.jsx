import React from "react";
import dron1 from "./дрон 1.png";
import rasm from "./fire_1f525 1.png"
import rasm1 from "./6V7A6493 3.png"
import apka from "./portrait-cheerful-attractive-young-woman-longsleeve-standing-with-arms-crossed-smiling_adobespark 2.png"
import ggg from "./Arrow 18 (Stroke).png"
import hhh from "./6V7Aa6493 1.png"
import './home.css';

const Home = () => {
  const products = [
    { id: 1, name: "Kugoo Kirin M4", badge: "ХИТ", battery: "2000 mAh", power: "1.2 л.с.", speed: "60 км/ч", time: "5 часов", oldPrice: "39 900", newPrice: "29 900" },
    { id: 2, name: "Kugoo Kirin M4", badge: "Новинка", battery: "2000 mAh", power: "1.2 л.с.", speed: "60 км/ч", time: "5 часов", oldPrice: "39 900", newPrice: "29 900" },
    { id: 3, name: "Kugoo Kirin M4", badge: "Новинка", battery: "2000 mAh", power: "1.2 л.с.", speed: "60 км/ч", time: "5 часов", oldPrice: "39 900", newPrice: "29 900" },
    { id: 4, name: "Kugoo Kirin M4", badge: "Новинка", battery: "2000 mAh", power: "1.2 л.с.", speed: "60 км/ч", time: "5 часов", oldPrice: "39 900", newPrice: "29 900" },
    { id: 5, name: "Kugoo Kirin M4", badge: "Новинка", battery: "2000 mAh", power: "1.2 л.с.", speed: "60 км/ч", time: "5 часов", oldPrice: "39 900", newPrice: "29 900" },
    { id: 6, name: "Kugoo Kirin M4", badge: "ХИТ", battery: "2000 mAh", power: "1.2 л.с.", speed: "60 км/ч", time: "5 часов", oldPrice: "39 900", newPrice: "29 900" },
    { id: 7, name: "Kugoo Kirin M4", badge: "ХИТ", battery: "2000 mAh", power: "1.2 л.с.", speed: "60 км/ч", time: "5 часов", oldPrice: "39 900", newPrice: "29 900" },
    { id: 8, name: "Kugoo Kirin M4", badge: "ХИТ", battery: "2000 mAh", power: "1.2 л.с.", speed: "60 км/ч", time: "5 часов", oldPrice: "39 900", newPrice: "29 900" },
    { id: 9, name: "Kugoo Kirin M4", badge: "ХИТ", battery: "2000 mAh", power: "1.2 л.с.", speed: "60 км/ч", time: "5 часов", oldPrice: "39 900", newPrice: "29 900" },
  ];

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

                <div>
                  <input type="checkbox" />
                  <label>Внедорожный</label>
                </div>

                <div>
                  <input type="checkbox" />
                  <label>Городской</label>
                </div>

                <div>
                  <input type="checkbox" />
                  <label>Зимний</label>
                </div>

                <h3>Для кого</h3>

                <div>
                  <input type="checkbox" />
                  <label>Для взрослого</label>
                </div>

                <div>
                  <input type="checkbox" />
                  <label>Для ребенка</label>
                </div>

                <div>
                  <input type="checkbox" />
                  <label>Для пенсионера</label>
                </div>

                <h3>Вес</h3>

                <div>
                  <input type="checkbox" />
                  <label>Легкие (до 15 кг)</label>
                </div>

                <div>
                  <input type="checkbox" />
                  <label>Средние (15-30 кг)</label>
                </div>

                <div>
                  <input type="checkbox" />
                  <label>Тяжелые (свыше 30 кг)</label>
                </div>

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
              <div key={p.id} className="product-card">

                <span
                  className={`product-badge ${p.badge === "ХИТ" ? "badge-hit" : "badge-new"
                    }`}
                >
                  {p.badge}
                </span>

                <div className="product-image">
                  <img src={hhh} alt="" />
                </div>

                <b className="product-name">{p.name}</b>

                <div className="product-features">
                  <span>2000 mAh</span>
                  <span>60 км/ч</span>
                  <span>1,2 л.с.</span>
                  <span>5 часов</span>
                </div>

                <div className="product-price">
                  <b className="new-price">29 900 ₽</b>
                </div>

                <div className="product-actions">
                  <button className="buy-btn">Купить в 1 клик</button>
                </div>

              </div>
            ))}
          </div>

        </div>

      </section>


    </div>

    
  );
};

export default Home;
