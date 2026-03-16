import React from 'react'

const About = () => {
  return (
    <div className="page-wrapper">
      <div className="about-hero">
        <h1>Biz haqimizda</h1>
        <p className="about-desc">Biz katta kompaniya bolib, har xil hizmatla va servislani taklif qilamiz har qanday website, dastur va web app yaratish bilan shugullanamiz.</p>
      </div>
      <div className="about-grid">
        <div className="about-text">
          <h2>Bizning missiyamiz</h2>
          <p>Zamonaviy texnologiyalar yordamida mijozlarimizga eng yaxshi raqamli yechimlarni taqdim etish.</p>
          <h2>Bizning qadriyatlarimiz</h2>
          <ul>
            <li> Sifat</li>
            <li> Ishonchlilik</li>
            <li> Innovatsiya</li>
          </ul>
        </div>
        <img src="https://picsum.photos/id/1/600/400" alt="about" />
      </div>
    </div>
  )
}

export default About