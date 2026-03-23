import Navbar from "../../components/navbar";
import pfp from "../../assets/ulugbek-pfp.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />
      <section className="hero">
        <img src={pfp} alt="pfp" className="hero-pfp" />
        <h1 className="hero-title">Safarboyev  Ulug'bek</h1>
        <p className="hero-subtitle">15 year old Full Stack Developer with 2-3 years of experience</p>
        <p className="hero-desc">I build clean, modern web apps with great user experiences.</p>
        <Link to="/contact" className="hero-btn">Contact with me</Link>
      </section>
    </>
  );
}

export default Home;