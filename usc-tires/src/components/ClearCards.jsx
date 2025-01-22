import React from "react";

function ClearCards({
  color,
  icon,
  iconAltText,
  header,
  bodyText1,
  bodyText2,
  link,
}) {
  return (
    <div className="clear-cards">
      <div className={color == "blue" ? "circle-icon blue" : "circle-icon red"}>
        <img src={icon} alt={iconAltText} />
      </div>

      <div className="text">
        <h4>{header}</h4>
        {link ? (
          <a href={link}>
            <p>{bodyText1}</p>
            <p>{bodyText2}</p>
          </a>
        ) : (
          <>
            <p>{bodyText1}</p>
            <p>{bodyText2}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default ClearCards;
