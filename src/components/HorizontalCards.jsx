import React from "react";

function HorizontalCards({ color, icon, iconAltText, header, bodyText, link }) {
  return (
    <div
      className={
        color == "blue" ? "horizontal-card blue" : "horizontal-card red"
      }
    >
      {/* <a href={link} className="card-inner"> */}
      <div className="card-inner">
        <div
          className={color == "blue" ? "circle-icon blue" : "circle-icon red"}
        >
          <img src={icon} alt={iconAltText} />
        </div>
        <div className="text">
          <h3>{header}</h3>
          <p className="accent-text">{bodyText}</p>
          {link && (
            <p className={color == "blue" ? "btn-text blue" : "btn-text red"}>
              Learn More
            </p>
          )}
        </div>
        {/* </a> */}
      </div>
    </div>
  );
}

export default HorizontalCards;
