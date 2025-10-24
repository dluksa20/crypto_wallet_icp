import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";


// Navigation routes
const navLinks = {
  home: {
    title: "HOME",
    route: "/"
  },
  wallet: {
    title: "WALLET",
    route: "/wallet"
  }
}



function Header() {
  return (
    <header>

      <div className="header-container">


        <div className="nav-logo">
          <Link to ="/">
              <img src="./public/assets/wallet.svg" alt="wallet logo" />
              <h1>ZeRo</h1>
          </Link>
        </div>


        <div className="nav-links">
          {
            Object.keys(navLinks).map((key) => (
                <Link key={key} to={navLinks[key].route} className="nav-link">
                  {navLinks[key].title}
                </Link>
            ))
          }
        </div>

      </div>
    </header>
  );
}

export default Header;
