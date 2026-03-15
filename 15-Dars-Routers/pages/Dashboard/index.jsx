import React from 'react'

const Dashboard = () => {
  return (
    <div className="page-wrapper">
      <div className="hero">
        <h1>Dashbordga xush kelibsiz</h1>
        <p>Bu bizning bosh sahifamiz. Barcha xizmatlar va imkoniyatlar shu yerda jamlangan.</p>
        <div className="stats">
          <div className="stat-card">
            <h2>120+</h2>
            <p>Loyihalar</p>
          </div>
          <div className="stat-card">
            <h2>45+</h2>
            <p>Mijozlar</p>
          </div>
          <div className="stat-card">
            <h2>5+</h2>
            <p>Yillik tajriba</p>
          </div>
        </div>
        <img src="https://picsum.photos/id/1060/1400/480" alt="dashboard" />
      </div>
    </div>
  )
}

export default Dashboard