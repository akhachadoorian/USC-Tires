import React, { useState, useEffect } from "react";
 

import Dashes from "../Dashes.jsx";

function HomePageHero({ backgroundImage, header, subtext }) {
    
    var style = {
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "",
        backgroundPositionX: '15vw',
        backgroundPositionY: 'center',
        backgroundSize: 'cover',
    }


    return (
        <section className="home-page-hero" style={style}>
            <div className="gradient-wrapper">
                <Dashes numDashes={5}/>
                <div className="hero-text">
                    <h1 dangerouslySetInnerHTML={{ __html: header }}></h1>
                    <h4>{subtext}</h4>
                </div>
            </div>
        </section>
    )
}

export default HomePageHero;