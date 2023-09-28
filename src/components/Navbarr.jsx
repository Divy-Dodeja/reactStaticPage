import React from "react";
import pepsilogo from '../public/logo.png'
export default function Navbarr() {
  return (
    // <div className="header">
    //   <Navbar collapseOnSelect expand="lg" className="header-content">
    //     <Navbar.Brand href="#home" className="logo">
    //       <img src="../public/logo.png" alt="pepsi" />
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //     <Navbar.Collapse id="responsive-navbar-nav">
    //       <Nav className="me-auto ul">
    //         <Nav.Link href="#products">Products</Nav.Link>
    //         <Nav.Link href="#new">What's New</Nav.Link>
    //         <Nav.Link href="#newsletter">Newsletter</Nav.Link>
    //         <Nav.Link href="#contact">Contact Us</Nav.Link>
    //         <Nav.Link href="#buyproducts" className="btn btn--small">
    //           buy products
    //         </Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Navbar>
    // </div>
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
