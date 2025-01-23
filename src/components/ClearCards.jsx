import React from "react";

function ClearCards({
  color,
  icon,
  iconAltText,
  header,
  bodyText,
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
            <p dangerouslySetInnerHTML={{ __html: bodyText }}></p>
          </a>
        ) : (
            <p dangerouslySetInnerHTML={{ __html: bodyText }}></p>
        )}
      </div>
    </div>
  );
}

export default ClearCards;
