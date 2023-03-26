import React from "react";
import Logo from "../assets/LOGO.png";

function Footer() {
  return (
    <footer className="footer">
      <img src={Logo} alt="logo" className="footer__logo" />
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
export default Footer;
