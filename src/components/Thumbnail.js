import React from "react";

function Thumbnail({ image, title }) {
  return (
    <div className="thumbnail">
      <img src={image} alt="thumbnail" className="thumbnail__img" />
      <div className="thumbnail__overlay"></div>
      <h2 className="thumbnail__title">{title}</h2>
    </div>
  );
}
export default Thumbnail;
