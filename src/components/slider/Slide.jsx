import React from "react";
import BlueQuote from "../../data/Icons/BlueQuote.svg"
import RedQuote from "../../data/Icons/RedQuote.svg"
import Building from "../../data/Images/USCTiresBuilding.jpg"
function Slide({ color, image, name, title, review }) {
    return (
        <div className={color == "red" ? "slide red" : "slide blue"}>
            {/* Image */}

            <div className="text">
                <h5 style={{marginBottom: '2px'}}>{name}</h5>
                <p style={{fontStyle: 'italic', marginBottom: '10px'}} className="accent-text">{title}</p>
                <p>{review}</p>
            </div>
            <div className="quote">
                <img src={ color == 'red' ? RedQuote : BlueQuote } alt="" />
            </div>
        </div>
    )
}

export default Slide