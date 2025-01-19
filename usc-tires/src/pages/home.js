import React from "react";

import HomePageHero from "../components/heros/HomePageHero"
import TireImage from "../data/Images/Tire.png"

import { company } from "../data/generalData.js"

function Home({}) {
    return (
        <div className="home-page-wrapper">
            <HomePageHero 
                backgroundImage={TireImage}
                header={company.withBreak}
                subtext={company.slogan}
            />
        </div>
    )
}

export default Home