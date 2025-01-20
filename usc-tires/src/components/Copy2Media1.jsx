import React from "react";
import PrimaryButton from "./PrimaryButton";

function Copy2Media1({
  color,
  image,
  imageAltText,
  header,
  bodyText,
  buttonText,
  buttonURL,
  buttonTarget = "_self",
}) {

  var backgroundImage = {
    backgroundImage: `url("${image}")`,
  };

  return (
    <div className={color == "red" ? "copy2-media1 red" : "copy2-media1 blue"}>
      {/* Copy */}
      <div className="copy2">
        <h2>{header}</h2>
        <p dangerouslySetInnerHTML={{ __html: bodyText }}></p>
        {buttonText ? 
            <PrimaryButton 
                color={"red"}
                buttonText={buttonText}
                buttonTarget={buttonTarget}
                buttonURL={buttonURL}
            /> 
        : 
            null}
      </div>

      {/* Media */}
      <div className="media1" style={backgroundImage} ></div>
    </div>
  );
}

export default Copy2Media1;
