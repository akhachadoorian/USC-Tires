import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Hamburger from "../data/Icons/HamburgerIcon.svg";
import BackArrowIcon from "../data/Icons/BackArrowIcon.svg";
import { contactInfo, nav, servicesNavigation } from "../data/generalData.js";

import Logo from "../data/Images/USCTiresLogo.jpg";

function useDeviceDetection() {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 800);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

function Navigation() {
  const isMobile = useDeviceDetection();

  return (
    <header className="navigation">
      <div className="head">
        {/* Call to Action */}
        <div className="phone-callout">
          <img src={contactInfo.phone.iconBlue} alt={contactInfo.phone.iconAltText} />
          <div className="callout-text">
            <p className="accent-text">Call us today!</p>
            <a href={contactInfo.phone.link}>
              <p dangerouslySetInnerHTML={{ __html: contactInfo.phone.text }}></p>
            </a>
          </div>
        </div>

        {/* Logo and Name */}
        <div className="logo-name">
          <img src={Logo} alt="USC Tire Logo" className="logo" />
          <p className="company-name">USC Tires & Service</p>
          {/* Mobile Hamburger */}
          {/* {isMobile ? (
            <div className="mobile-hamburger">
              <img src={Hamburger} alt="3 Lines stacked" />
            </div>
          ) : null} */}
        </div>
      </div>

      <div className="temp-nav-line"></div>

      {/* {isMobile ? (
        <div className="mobile-nav">
          <div className="back-arrow">
            <img src={BackArrowIcon} alt="Arrow point to left" />
          </div>
          <nav className="mobile">
            {nav.map((component, key) => (
              <div
                className={`${component.title.toLowerCase()} nav-container`}
                key={`${component.title}-${key}`}
              >
                {component.title === "Services" ? (
                  <div className="services" key={`${component.title}-${key}`}>
                    <Link
                      id={`${component.title}`}
                      to={component.link}
                      className="main-nav"
                    >
                      {component.title}
                    </Link>
                    <div className="dropdown-nav">
                      {servicesNavigation.map((item, subKey) => (
                        <Link
                          id={`${item.title}-${subKey}`}
                          to={item.link}
                          key={`${item.title}-${subKey}`}
                          className="dropdown-item"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    id={`${component.title}-${key}`}
                    to={component.link}
                    className="main-nav"
                  >
                    {component.title}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      ) : (
        <nav className="desktop">
          {nav.map((component, key) => (
            <div
              className={`${component.title.toLowerCase()} nav-container`}
              key={`${component.title}-${key}`}
            >
              {component.title === "Services" ? (
                <div className="services" key={`${component.title}-${key}`}>
                  <Link
                    id={`${component.title}`}
                    to={component.link}
                    className="main-nav"
                  >
                    {component.title}
                  </Link>
                  <div className="dropdown-nav">
                    {servicesNavigation.map((item, subKey) => (
                      <Link
                        id={`${item.title}-${subKey}`}
                        to={item.link}
                        key={`${item.title}-${subKey}`}
                        className="dropdown-item"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  id={`${component.title}-${key}`}
                  to={component.link}
                  className="main-nav"
                >
                  {component.title}
                </Link>
              )}
            </div>
          ))}
        </nav>
      )} */}

      
    </header>
  );
}

export default Navigation;
