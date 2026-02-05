import './App.css' // We import the CSS file here

function App() {
  return (
    <div className="container">
      {/* 1) The Title */}
      <h1 className="title">Ruziev Gofur</h1>
      <hr className="divider" />

      {/* 2) The Text Lines */}
      <div className="text-lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* 3) The Grid */}
      <div className="grid-container">
        {/* Creating 12 boxes for the grid */}
        {[...Array(12)].map((_, i) => (
          <div key={i} className="grid-box"></div>
        ))}
      </div>
    </div>
  )
}

export default App