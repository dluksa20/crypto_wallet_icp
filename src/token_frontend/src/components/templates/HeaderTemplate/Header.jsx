import React from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { BiWallet } from "react-icons/bi";

// Navigation routes
const navLinks = {
  transfer: { title: "Transfer", route: "/transfer" },
  claim: { title: "Claim Tokens", route: "/claim" },
  wallet: { title: "Wallet", route: "/wallet" },
  home: { title: "Home", route: "/" },
};

function Header() {
  const location = useLocation();

  return (
    <header className="header-container">
      <div className="header-subcontainer">
        {/* Logo */}
        <div className="header-logo-container">
          <Link to="/" className="header-logo-link">
            <BiWallet className="header-wallet-svg" />
            <h1>
              Ze<span>Ro</span>
            </h1>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="header-navigation-links">
          {Object.keys(navLinks).map((key) => (
            <Link
              key={key}
              to={navLinks[key].route}
              className={`header-navigation-link ${
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
