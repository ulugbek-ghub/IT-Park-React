import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import errorimg from "../../assets/404-img.svg"

function ErrorPage() {
  return (
    <>
      <Navbar />
      <div className="error-page">
        <img src={errorimg}/>
        <p className="error-msg">Page not found</p>
        <Link to="/" className="error-btn">Go Home</Link>
      </div>
    </>
  );
}

export default ErrorPage;