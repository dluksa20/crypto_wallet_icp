import React from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
// import { BsSearch } from 'react-icons/bs';
// import { ReactComponent as WalletIcon } from "/assets/wallet.svg";
import { BiWallet } from 'react-icons/bi';


// Navigation routes
const navLinks = {
  transfer: { title: "Transfer", route: "/transfer" },
  claim: {title: "Claim Tokens", route: "/claim"},
  wallet: { title: "Wallet", route: "/wallet" },
  home: { title: "Home", route: "/"}
};

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="nav-logo">
          <Link to="/" className="logo-link">
            <BiWallet className="wallet-svg"/>
            <h1>Ze<span className="accent">Ro</span></h1>
          </Link>
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
