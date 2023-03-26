import React from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/LOGO.svg";

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <Link to="/">
          <img src={Logo} alt="logo" className="header__nav__logo" />
        </Link>
        <div className="header__nav__links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "header__nav__links--active"
                : "header__nav__links--inactive"
            }
          >
            Acceuil
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "header__nav__links--active"
                : "header__nav__links--inactive"
            }
          >
            A Propos
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
export default Header;
