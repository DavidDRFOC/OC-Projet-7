import React, { useState } from "react";
import arrow from "../assets/arrow.svg";

function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <button
        type="button"
        className="dropdown__button"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <p className="dropdown__title">{title}</p>
        <img
          src={arrow}
          alt="arrow"
          className={`dropdown__arrow ${isOpen ? "rotate" : ""}`}
        />
      </button>
      <div className={`dropdown__content ${isOpen ? "show" : ""}`}>
        {Array.isArray(content) ? (
          <ul className="dropdown__list">
            {content.map((equipment, index) => (
              <li key={index} className="dropdown__list-element">
                {equipment}
              </li>
            ))}
          </ul>
        ) : (
          <p className="dropdown__text">{content}</p>
        )}
      </div>
    </div>
  );
}
export default Dropdown;
