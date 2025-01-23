import React from "react";

import HomePageHero from "../components/heros/HomePageHero"
import Copy2Media1 from "../components/Copy2Media1.jsx";
import VerticalCard from "../components/VerticalCard.jsx";

import { company, contactInfo } from "../data/generalData.js"
import { hero, aboutUs, services, testimonials, contact } from "../data/homepage.js"
import HorizontalCards from "../components/HorizontalCards.jsx";
import Spacer from "../components/Spacer.jsx";
import TestimonialSlider from "../components/slider/TestimonialSlider.jsx";
import ClearCards from "../components/ClearCards.jsx";

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
            <section className="testimonials">
                <TestimonialSlider data={testimonials.slider} />
                <div className="text">
                    <h2>{testimonials.header}</h2>
                    <p>{testimonials.bodyText}</p>
                </div>
            </section>

            {/* Contact */}
            <section className="contact">
                <div className="header-text">
                    <h2>{contact.header}</h2>
                    <p>{contact.bodyText}</p>
                </div>
                <div className="multiple-clear-cards">
                    <ClearCards 
                        color={'blue'}
                        icon={contactInfo.location.iconWhite}
                        iconAltText={contactInfo.location.iconAltText}
                        header={contactInfo.location.type}
                        bodyText={contactInfo.location.text}
                    />
                    <ClearCards 
                        color={'blue'}
                        icon={contactInfo.hours.iconWhite}
                        iconAltText={contactInfo.hours.iconAltText}
                        header={contactInfo.hours.type}
                        bodyText={contactInfo.hours.text}
                    />
                </div>
                <div className="multiple-clear-cards">
                    <ClearCards 
                        color={'blue'}
                        icon={contactInfo.phone.iconWhite}
                        iconAltText={contactInfo.phone.iconAltText}
                        header={contactInfo.phone.type}
                        bodyText={contactInfo.phone.text}
                        link={contactInfo.phone.link}
                    />
                    <ClearCards 
                        color={'blue'}
                        icon={contactInfo.email.iconWhite}
                        iconAltText={contactInfo.email.iconAltText}
                        header={contactInfo.email.type}
                        bodyText={contactInfo.email.text}
                        link={contactInfo.email.link}
                    />
                </div>
            </section>
        </div>
    )
}

export default Home