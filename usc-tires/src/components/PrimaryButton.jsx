import React from "react";
import { Link } from "react-router-dom";

import Arrow from "../data/Icons/arrow-right-solid.svg"

function PrimaryButton({
  color,
  buttonText,
  buttonURL,
  buttonTarget = "_self",
}) {
  return (
    <div className="primary-btn-holder">
        <Link to={buttonURL} target={buttonTarget} className={color == "red" ? "primary-btn red" : "primary-btn blue"}>
            <p>{buttonText}</p>
            <img src={Arrow} alt="White arrow icon point to the right"/>
        </Link>
    </div>
  );
}

export default PrimaryButton;
