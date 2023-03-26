import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Error({ setShowFooter }) {
  useEffect(() => {
    setShowFooter(false);
  });
  console.log(setShowFooter);

  return (
    <div className="error">
      <div className="error__wrapper">
        <p className="error__text">404</p>
        <p className="error__subtext">
          Oups! La page que vous demandez n'existe pas.
        </p>
      </div>
      <Link to="/" className="error__link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default Error;
