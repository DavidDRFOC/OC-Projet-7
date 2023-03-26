import React, { useState } from "react";
import arrowRight from "../assets/arrow_right.svg";
import arrowLeft from "../assets/arrow_left.svg";

function Carousel({ images }) {
  const [index, setIndex] = useState(0);
  const length = images.length;

  const handleNextClick = () => {
    setIndex((prevIndex) => (prevIndex === length - 1 ? 0 : index + 1));
  };

  const handlePrevClick = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? length - 1 : index - 1));
  };

  return (
    <div className="image">
      {images.map((picture, i) => {
        return (
          <div
            key={i}
            className={
              i === index ? "image__active-picture" : "image__inactive-picture"
            }
          >
            {i === index && (
              <img src={picture} alt="appartement" className="image__picture" />
            )}
            {i === index && length > 1 && (
              <span className="image__counter">
                {index + 1}/{length}
              </span>
            )}
          </div>
        );
      })}

      {length > 1 && (
        <>
          <div className="image__previous" onClick={handlePrevClick}>
            <img
              src={arrowLeft}
              alt="previous"
              className="image__previous-icon"
            />
          </div>
          <div className="image__next" onClick={handleNextClick}>
            <img src={arrowRight} alt="next" className="image__next-icon" />
          </div>
        </>
      )}
    </div>
  );
}
export default Carousel;
