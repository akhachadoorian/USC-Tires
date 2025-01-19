import React from "react";

function WhiteIconText({ icon, iconAltText, textLine1, textLine2, type, link }) {


  return (
    <div className="white-icon-text">
      <div className="white-circle-icon">
        <img src={icon} alt={iconAltText} />
      </div>

      <div className="text">
        { type === "phone" ?
            <a href={`tel:${link}`}>{textLine1}</a>
        :
        type === "email" ?
            <a href={`mailto:${link}`}>{textLine1}</a>
            :
            <>
                <p>{textLine1}</p>
                {textLine2 && <p>{textLine2}</p>}
            </>
            
        }

        
      </div>
    </div>
  );
}

export default WhiteIconText;
