import { Link } from "react-router-dom";
import './Slider.css';
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light " >
        <div className="container">
          <Link className="navbar-brand" to="/" style={{color:"#304b12" ,fontSize:"25px", fontFamily:"cursive"}}>
          Shopify 
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/"} style={{ color: "#582f0e", fontSize: "22px" }}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" style={{color:"#582f0e" ,fontSize:"22px"}}>
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
        </nav>
    </>
  );
}

