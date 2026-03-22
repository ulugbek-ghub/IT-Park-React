import { useState } from "react";
import Navbar from "../../components/navbar";

function Settings() {
  const [dark, setDark] = useState(true);

  const toggle = () => {
    setDark(!dark);
    document.documentElement.setAttribute("data-theme", dark ? "light" : "dark");
  };

  return (
    <>
      <Navbar />
      <section className="page">
        <h2 className="page-title">Settings</h2>
        <div className="setting-row">
          <span className="setting-label">Theme</span>
          <button className="theme-toggle" onClick={toggle}>
            {dark ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
        <br />
      <p>Log in log out manimca garakmidi lichni gap, olavar radnoy</p>

      </section>

    </>
  );
}

export default Settings;