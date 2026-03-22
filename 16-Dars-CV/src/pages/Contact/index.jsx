import Navbar from "../../components/navbar";

function Contact() {
  return (
    <>
      <Navbar />
      <section className="page">
        <h2 className="page-title">Contact</h2>
        <p className="page-desc">Feel free to reach out!</p>
        <div className="contact-info">
          <a href="mailto:ulugbek@email.com" target="_blank" className="contact-link">
            📧 My Gmail, dont spam pls:)
          </a>
          <a href="https://github.com/ulugbek-ghub" target="_blank" className="contact-link">
            💼 Github Profile
          </a>
          <a href="https://www.instagram.com/ulugbekk.s/" target="_blank" className="contact-link">
            📱 Instagram
          </a>
          <a href="tel:+998-93-742-2333"  className="contact-link">
            🤙🏻 Phone number
          </a>
          <p className="contact-link">📍 Urganch , Uzbekistan</p>
        </div>
      </section>
    </>
  );
}

export default Contact;