import React from 'react'

const Settings = () => {
  const toggleDarkMode = () => {
    document.body.classList.toggle('dark')
  }

  return (
    <div className="page-wrapper">
      <div className="settings-grid">
        <h1>Sozlamalar</h1>
        <div className="setting-item">
          <span>Dark Mode</span>
          <button className="setting-btn" onClick={toggleDarkMode}>Yoqish</button>
        </div>
        <div className="setting-item">
          <span>Til — Uzbek</span>
          <button className="setting-btn">Ozgartirish</button>
        </div>
        <div className="setting-item">
          <span>Bildirishnomalar</span>
          <button className="setting-btn">Boshqarish</button>
        </div>
        <div className="setting-item">
          <span>Hisobga kirish</span>
          <button className="setting-btn">Log In</button>
        </div>
        <div className="setting-item">
          <span>Hisobdan chiqish</span>
          <button className="setting-btn danger">Log Out</button>
        </div>
      </div>
    </div>
  )
}

export default Settings