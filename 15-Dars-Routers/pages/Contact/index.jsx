import React from 'react'

const Contact = () => {
  return (
    <div className="page-wrapper">
      <div className="contact-grid">
        <h1>Biz bilan boglaning</h1>
        <p>Quyidagi kanallar orqali biz bilan muloqot qilishingiz mumkin.</p>
        <a className="contact-card" href="mailto:ulugbek.github@gmail.com" target="_blank">
          <span className="contact-icon">@</span>
          <span>ulugbek.github@gmail.com</span>
        </a>
        <a className="contact-card" href="tel:+998937422333">
          <span className="contact-icon">#</span>
          <span>+998 93 742 2333</span>
        </a>
        <a className="contact-card" href="https://www.github.com/ulugbek-ghub" target="_blank">
          <span className="contact-icon">G</span>
          <span>github.com/ulugbek-ghub</span>
        </a>
      </div>
    </div>
  )
}

export default Contact