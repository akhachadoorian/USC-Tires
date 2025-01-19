import React, { useState, useEffect } from "react";

import Logo from "../data/Images/USCTiresLogo.jpg";
import RedNavArrow from "../data/Icons/RedNavArrow.svg";
import RedClock from "../data/Icons/RedClock.svg";
import RedPhone from "../data/Icons/RedPhone.svg";
import RedEnvelope from "../data/Icons/RedEnvelope.svg";

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
            icon={RedNavArrow}
            iconAltText={"Red Navigation Arrow Icon"}
            textLine1={contactInfo[2].address1}
            textLine2={contactInfo[2].address2}
            type={contactInfo[2].type}
          />
          <WhiteIconText
            icon={RedClock}
            iconAltText={"Red Clock Icon"}
            textLine1={contactInfo[3].line1}
            textLine2={contactInfo[3].line2}
            type={contactInfo[3].type}
          />
          <WhiteIconText
            icon={RedPhone}
            iconAltText={"Red Phone Icon"}
            textLine1={contactInfo[0].text}
            link={contactInfo[0].number}
            type={contactInfo[0].type}
          />
          <WhiteIconText
            icon={RedEnvelope}
            iconAltText={"Red Envelope Icon"}
            textLine1={contactInfo[1].email}
            link={contactInfo[1].email}
            type={contactInfo[1].type}
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
