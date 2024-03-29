import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { cartItems } = useCart();
  return (
    <div>
      <nav class="navbar navbar-expand-sm">
        <div class="container-fluid">
          <div>
          <p className="h3 m-4" style={{fontWeight:'bold'}}>ECOMMERCE</p>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span class="navbar-toggler-icon "></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="collapsibleNavbar"
          >
            <ul class="navbar-nav m-2">
              <li class="nav-item">
                <Link class="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/mens">
                  Mens
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/womens">
                  Womens
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/kids">
                  Kids
                </Link>
              </li>
              <Link to="/cart" className="nav-link">
                <button data-quantity="0" class="btn-cart">
                  <svg
                    class="icon-cart"
                    viewBox="0 0 24.38 30.52"
                    height="30.52"
                    width="24.38"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>icon-cart</title>
                    <path
                      transform="translate(-3.62 -0.85)"
                      d="M28,27.3,26.24,7.51a.75.75,0,0,0-.76-.69h-3.7a6,6,0,0,0-12,0H6.13a.76.76,0,0,0-.76.69L3.62,27.3v.07a4.29,4.29,0,0,0,4.52,4H23.48a4.29,4.29,0,0,0,4.52-4ZM15.81,2.37a4.47,4.47,0,0,1,4.46,4.45H11.35a4.47,4.47,0,0,1,4.46-4.45Zm7.67,27.48H8.13a2.79,2.79,0,0,1-3-2.45L6.83,8.34h3V11a.76.76,0,0,0,1.52,0V8.34h8.92V11a.76.76,0,0,0,1.52,0V8.34h3L26.48,27.4a2.79,2.79,0,0,1-3,2.44Zm0,0"
                    ></path>
                  </svg>
                  <span class="badge">{cartItems.length}</span>
                </button>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
      </div>
  );
};

export default Navbar;
