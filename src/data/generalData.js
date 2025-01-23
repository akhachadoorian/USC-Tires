////////////////////////////////
// Contact Information
////////////////////////////////

import BluePhoneIcon from "../data/Icons/BluePhoneIcon.svg";

import RedNavArrow from "../data/Icons/RedNavArrow.svg";
import RedClock from "../data/Icons/RedClock.svg";
import RedPhone from "../data/Icons/RedPhone.svg";
import RedEnvelope from "../data/Icons/RedEnvelope.svg";

import WhiteNavArrow from "../data/Icons/WhiteNavArrow.svg";
import WhiteClock from "../data/Icons/WhiteClock.svg";
import WhitePhone from "../data/Icons/WhitePhone.svg";
import WhiteEnvelope from "../data/Icons/WhiteEnvelope.svg";
import WhiteMessageBubble from "../data/Icons/MessageBubbleIcon.svg";

export const contactInfo = {
  phone: {
    type: "phone",
    text: "(251) 384-TIRE (8473)",
    link: "tel:251-384-8473",
    iconRed: RedPhone,
    iconBlue: BluePhoneIcon,
    iconWhite: WhitePhone,
    iconAltText: "Phone icon",
  },
  email: {
    type: "email",
    text: "test@gmail.com",
    link: "mailto:test@gmail.com",
    iconRed: RedEnvelope,
    iconBlue: "",
    iconWhite: WhiteEnvelope,
    iconAltText: "Envelope icon",
  },
  location: {
    type: "location",
    text: "4121 Government Blvd. <br />Mobile, AL 36693",
    link: "",
    iconRed: RedNavArrow,
    iconBlue: "",
    iconWhite: WhiteNavArrow,
    iconAltText: "Navigation arrow icon",
  },
  hours: {
    type: "hours",
    text: "Monday - Friday 7:30 am -5:30 pm <br />Saturday appointment only",
    link: "",
    iconRed: RedClock,
    iconBlue: "",
    iconWhite: WhiteClock,
    iconAltText: "Clock icon",
  },
  form: {
    type: "message us",
    text: "Fill out the form on our contact page",
    link: "",
    iconRed: "",
    iconBlue: "",
    iconWhite: WhiteMessageBubble,
    iconAltText: "Message bubble icon",
  },
};

// export const phoneNumber = {
//   number: "251-384-8473",
//   text: "(251) 384-TIRE (8473)",
// };

////////////////////////////////

////////////////////////////////
// Navigation Information
////////////////////////////////

export const servicesNavigation = [
  { title: "Tires", link: "/services/tires" },
  { title: "Brakes", link: "/services/brakes" },
  { title: "Alignment", link: "/services/alignment" },
  { title: "A/C Heating", link: "/services/a-c-heating" },
  { title: "Oil Change", link: "/services/oil-change" },
  { title: "Tune Ups", link: "/services/tune-ups" },
  { title: "Leveling Kits", link: "/services/leveling-kits" },
  { title: "Suspensions", link: "/services/suspensions" },
];

export const nav = [
  { title: "Home", link: "/" },
  { title: "About Us", link: "/about-us" },
  { title: "Services", link: "/services" },
  { title: "Contact Us", link: "/contact-us" },
];

////////////////////////////////
// Company Name & Slogan
////////////////////////////////
export const company = {
  name: "USC Tires & Services",
  slogan: "Where Family, Experience and Service meet the Road.",
  withBreak: "USC Tires</br>& Services",
};
////////////////////////////////
