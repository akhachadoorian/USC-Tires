import React from "react";

function VerticalCard({ color, icon, iconAltText, header, bodyText }) {

    return (
        <div className={color === 'red' ? "vertical-card red" : "vertical-card blue"}>
            {/* Icon */}
            <div className={color === 'red' ? "red icon-bg" : "blue icon-bg"}>
                <img src={icon} alt={iconAltText} />
            </div>

            {/* Text */}
            <h4>{header}</h4>
        </div>
    )
}

export default VerticalCard