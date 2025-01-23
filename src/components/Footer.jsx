import React, { useState, useEffect } from "react";

import Logo from "../data/Images/USCTiresLogo.jpg";

import WhiteIconText from "./WhiteIconText";
import { contactInfo } from "../data/generalData.js";

function Footer() {
  return (
    <footer>
      {/* Navigation */}
      {/* <div className="temp-nav-line"></div> */}

      <div className="footer-text">
        {/* Logo & Text */}
        <div className="logo-name">
          <img src={Logo} alt="USC Tire Logo" className="logo" />
          <p className="company-name">
            USC Tires <br /> & Service
          </p>
        </div>
        {/* Contact Us */}
        <div className="contact-us-opts">
          <WhiteIconText 
            icon={contactInfo.location.iconRed}
            iconAltText={contactInfo.location.iconAltText}
            type={contactInfo.location.type}
            bodyText={contactInfo.location.text}
          />
          <WhiteIconText 
            icon={contactInfo.hours.iconRed}
            iconAltText={contactInfo.hours.iconAltText}
            type={contactInfo.hours.type}
            bodyText={contactInfo.hours.text}
          />
          <WhiteIconText 
            icon={contactInfo.phone.iconRed}
            iconAltText={contactInfo.phone.iconAltText}
            type={contactInfo.phone.type}
            bodyText={contactInfo.phone.text}
            link={contactInfo.phone.link}
          />
          <WhiteIconText 
            icon={contactInfo.email.iconRed}
            iconAltText={contactInfo.email.iconAltText}
            type={contactInfo.email.type}
            bodyText={contactInfo.email.text}
            link={contactInfo.email.link}
          />
        </div>
      </div>

      {/* Bottom Line */}
      <div className="bottom-footer">
        <p>Copyright 2024 by USC Tires</p>
        <p>Privacy Statement</p>
        <p>Designed & Developed by Alex Khachadoorian</p>
      </div>
    </footer>
  );
}

export default Footer;
