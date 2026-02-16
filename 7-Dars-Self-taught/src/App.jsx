import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import User from './User';

function Home() {
  return (
    <div>
      <h1>👥 User List</h1>
      <Link to="/user/1">User 1</Link><br/>
      <Link to="/user/2">User 2</Link><br/>
      <Link to="/user/3">User 3</Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/user/:id" element={<User/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;