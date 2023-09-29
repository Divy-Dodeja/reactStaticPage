import React from "react";
import pepsilogo from "../public/logo.png";
export default function Navbar() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <a href="/" className="logo">
            <img src={pepsilogo} alt="pepsi" />
          </a>
          <nav className="menu">
            <ul>
              <li>
                <a href="#products">products</a>
              </li>
              <li>
                <a href="#new">what's new</a>
              </li>
              <li>
                <a href="#newsletter">newsletter</a>
              </li>
              <li>
                <a href="#contact">contact us</a>
              </li>
            </ul>
          </nav>
          <a href="#buy-products" className="btn btn-small">
            buy products
          </a>
        </div>
      </div>
    </header>
  );
}
