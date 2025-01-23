import React from "react";

function WhiteIconText({ icon, iconAltText, bodyText, type, link }) {


  return (
    <div className="white-icon-text">
      <div className="white-circle-icon">
        <img src={icon} alt={iconAltText} />
      </div>

      <div className="text">
        {link ? 
          <a href={link} >
            <p dangerouslySetInnerHTML={{ __html: bodyText }}></p>
          </a>
          :
          <p dangerouslySetInnerHTML={{ __html: bodyText }}></p>
        }
      </div>
    </div>
  );
}

export default WhiteIconText;
