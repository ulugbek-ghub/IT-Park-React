import React from "react";
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-subscribe">
        <p>ОСТАВЬТЕ СВОЮ ПОЧТУ И СТАНЬТЕ ПЕРВЫМ, <br /> КТО ПОЛУЧИТ СКИДКУ НА НОВЫЕ САМОКАТЫ</p>
        <input type="email" placeholder="Введите Ваш email" />
        <button>Подписаться</button>
      </div>

      <div className="footer-links">
        <div className="footer-col">
          <h4>Каталог товаров</h4>
          <a href="#">Электросамокаты</a>
          <a href="#">Электроскутеры</a>
          <a href="#">Электровелосипеды</a>
          <a href="#">Электровелосипеды</a>
        </div>

        <div className="footer-col">
          <h4>Покупателям</h4>
          <a href="#">Сервисный центр</a>
          <a href="#">Доставка и оплата</a>
          <a href="#">Рассрочка</a>
          <a href="#">Тест-драйв</a>
          <a href="#">Блог</a>
          <a href="#">Сотрудничество</a>
          <a href="#">Контакты</a>
          <a href="#">Акции</a>
        </div>

        <div className="footer-col footer-contacts">
          <h4>Контакты</h4>
          <div className="contact-block">
            <div>
              <small>Call-центр</small>
              <b>+7 (800) 505-54-61</b>
              <small>Пн-Вс 10:00 - 20:00</small>
            </div>
            <div>
              <small>Сервисный центр</small>
              <b>+7 (499) 350-76-92</b>
              <small>Пн-Вс 10:00 - 20:00</small>
            </div>
          </div>

          <div className="contact-block">
            <div>
              <small>Магазин в Москве</small>
              <p>ул. Ткацкая, 5 стр. 16</p>
              <small>+7 (499) 406 15 87</small>
            </div>
            <div>
              <small>Магазин в Санкт-Петербурге</small>
              <p>ул. Фрунзе, 2</p>
              <small>+7 (499) 406 15 87</small>
            </div>
            <div>
              <small>Магазин в Краснодаре</small>
              <p>ул. Восточно-Кругликовская, 86</p>
              <small>+7 (800) 505 54 61</small>
            </div>
          </div>
        </div>

        <a href="#" className="footer-callback">Заказать звонок</a>
      </div>

      <hr />

      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <span className="footer-logo">KUGOO</span>
          <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" height="40" /></a>
          <a href="#"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" height="40" /></a>
        </div>

        <div className="footer-socials">
          <a href="#">VK · Вконтакте <span>3 300</span></a>
          <a href="#">Instagram <span>10 602</span></a>
          <a href="#">YouTube <span>3 603</span></a>
          <a href="#">Telegram <span>432</span></a>
        </div>
      </div>

      <div className="footer-legal">
        <div>
          <a href="#">Реквизиты</a>
          <a href="#">Политика конфиденциальности</a>
        </div>
        <div className="footer-payments">
          <span>Google Pay</span>
          <span>Apple Pay</span>
          <span>VISA</span>
          <span>Mastercard</span>
        </div>
        <div>
          <span>Online чат:</span>
          <a href="#">Viber</a>
          <a href="#">WhatsApp</a>
          <a href="#">Telegram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;