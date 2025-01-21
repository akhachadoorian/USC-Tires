import React from "react";

import HomePageHero from "../components/heros/HomePageHero"
import Copy2Media1 from "../components/Copy2Media1.jsx";
import VerticalCard from "../components/VerticalCard.jsx";

import { company } from "../data/generalData.js"
import { hero, aboutUs, services } from "../data/homepage.js"
import HorizontalCards from "../components/HorizontalCards.jsx";
import Spacer from "../components/Spacer.jsx";

function Home({}) {
    return (
        <div className="home-page-wrapper">
            {/* Hero */}
            <HomePageHero 
                backgroundImage={hero.img}
                header={company.withBreak}
                subtext={company.slogan}
            />

            {/* About Us */}
            <section className="about-us">
                <Copy2Media1 
                    color={"red"}
                    header={aboutUs.header}
                    bodyText={aboutUs.bodyText}
                    // image={ManWorkingOnCar}
                    image={aboutUs.img}
                    imageAltText={"Man working on the underside of a car"}
                    // buttonText={aboutUs.buttonText}
                    // buttonURL={aboutUs.buttonURL}
                />

                <div className="multiple-vertical-cards">
                    {aboutUs.values.map((v, key) => (
                        <VerticalCard 
                            key={`${v.header}-${key}`}
                            color={'red'}
                            icon={v.icon}
                            iconAltText={v.iconAltText}
                            header={v.header}
                            bodyText={v.bodyText}
                        />
                    ))}
                </div>
            </section>

            {/* Services */}
            <section className="services">
                <div className="double-line-header">
                    <h2>{services.header}</h2>
                </div>
                <div className="multiple-horizontal-cards">
                    {services.services.map((s, key) =>(
                        <HorizontalCards 
                            key={`${s.header}-${key}`}
                            color={"blue"}
                            icon={s.icon}
                            iconAltText={s.iconAltText}
                            header={s.title}
                            bodyText={s.bodyText}
                            link={s.link}
                        />
                    ))}
                </div>
            </section>

            <Spacer />
            {/* Testimonials */}

            {/* Contact */}
        </div>
    )
}

export default Home