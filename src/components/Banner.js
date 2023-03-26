import React from "react";

function Banner({ image, title }) {
  return (
    <div className="banner">
      <img src={image} alt="banner" className="banner__img" />
      <div className="banner__overlay"></div>
      {title && <h2 className="banner__title">{title}</h2>}
    </div>
  );
}
export default Banner;
