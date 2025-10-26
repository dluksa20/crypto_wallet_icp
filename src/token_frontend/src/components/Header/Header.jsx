import React from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { BsSearch } from 'react-icons/bs';
// Navigation routes
const navLinks = {
  home: { title: "Home", route: "/" },
  wallet: { title: "Wallet", route: "/wallet" },
};

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="nav-logo">
          <Link to="/" className="logo-link">
            <img src="/assets/wallet.svg" alt="wallet logo" />
            <h1>Ze<span className="accent">Ro</span></h1>
          </Link>
        </div>



        {/* Search bar */}
        <div className="search-form-component">

          <div className="search-form-input">
            <form action="">
              <input type="search" id="header-search" placeholder="Search" aria-label="Search field" />
            </form>
          </div>

          <div className="seearch-form-button">
              <button type="submit" aria-label="Submit Search" >
                <BsSearch />
              </button>
          </div>

        </div>

        {/* Navigation */}
        <nav className="nav-links">
          {Object.keys(navLinks).map((key) => (
            <Link
              key={key}
              to={navLinks[key].route}
              className={`nav-link ${
                location.pathname === navLinks[key].route ? "active" : ""
              }`}
            >
              {navLinks[key].title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
