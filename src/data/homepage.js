import ManWorkOnCar from "../data/Images/ManWorkingOnCar.png";
import TireImage from "../data/Images/Tire.png";
import LocationNode from "../data/Icons/LocationNode.svg";
import AwardIcon from "../data/Icons/AwardIcon.svg";
import GroupIcon from "../data/Icons/GroupIcon.svg";
import ServeIcon from "../data/Icons/ServeIcon.svg";
import AlignmentIcon from "../data/Icons/AlignmentIcon.svg";
import BounceIcon from "../data/Icons/BounceIcon.svg";
import CautionIcon from "../data/Icons/CautionIcon.svg";
import OilIcon from "../data/Icons/OilIcon.svg";
import TempIcon from "../data/Icons/TempIcon.svg";
import TuneUpIcon from "../data/Icons/TuneUpIcon.svg";
import WheelIcon from "../data/Icons/WheelIcon.svg";
import WrenchIcon from "../data/Icons/WrenchIcon.svg";
import Building from "../data/Images/USCTiresBuilding.jpg"

export const hero = {
  img: TireImage,
};

export const aboutUs = {
  header: "About Us",
  bodyText:
    "USC Tires & Service is a family-owned and locally operated business with over 50 years of experience. We’re dedicated to delivering exceptional service, building personal connections, and ensuring our community’s safety on the road. From reliable tire services to expert auto care, we treat every customer like family.",
  buttonText: "Learn More",
  buttonURL: "",
  img: Building,
  values: [
    {
      icon: LocationNode,
      iconAltText: "Map location icon",
      header: "Local Expertise",
      bodyText: "As Mobile natives, we understand the unique needs of our community and are proud to provide tailored solutions for your automotive needs.",
    },
    {
      icon: AwardIcon,
      iconAltText: "Award ribbon with a check in it icon  ",
      header: "Decades of Experience",
      bodyText: "Building on over 50 years of expertise, we offer trusted, high-quality service for every vehicle we work on.",
    },
    {
      icon: GroupIcon,
      iconAltText: "Group of people icon",
      header: "Family-Owned Values",
      bodyText: "We’re more than just a business—we’re a family dedicated to treating every customer with care, respect, and personalized service.",
    },
    {
      icon: ServeIcon,
      iconAltText: "Hand serving dish icon",
      header: "Customer-Focused Care",
      bodyText: "Your safety is our top priority. We’re here to understand your needs, offer reliable solutions, and ensure you drive with confidence.",
    },
  ],
};

export const services = {
  header: "Our Auto Services",
  services: [
    {
      icon: WheelIcon,
      iconAltText: "Icon of a tire",
      title: "Tires",
      bodyText: "Discover our wide range of high-quality tires for every vehicle type, expertly installed for maximum safety and performance.",
      link: "",
    },
    {
      icon: CautionIcon,
      iconAltText: "Icon of a caution symbol",
      title: "Brakes",
      bodyText: "Keep your brakes in top condition with our expert maintenance, repair, and replacement services.",
      link: "",
    },
    {
      icon: AlignmentIcon,
      iconAltText: "Icon of the text alignment symbol",
      title: "Alignment",
      bodyText: "Improve your vehicle's handling and reduce tire wear with precise alignment services.",
      link: "",
    },
    {
      icon: TempIcon,
      iconAltText: "Icon of a thermometer",
      title: "A/C & Heating",
      bodyText: "Stay comfortable year-round with our comprehensive air conditioning and heating system services.",
      link: "",
    },
    {
      icon: OilIcon,
      iconAltText: "Icon of an oil can",
      title: "Oil Change",
      bodyText: "Protect your engine with regular oil changes using top-grade oils and filters.",
      link: "",
    },
    {
      icon: TuneUpIcon,
      iconAltText: "Icon of car with caution symbol",
      title: "Tune Up",
      bodyText: "Ensure your vehicle runs efficiently with our complete tune-up services tailored to your needs.",
      link: "",
    },
    {
      icon: WrenchIcon,
      iconAltText: "Icon of a wrench",
      title: "Leveling Kits",
      bodyText: "From improved handling to a balanced look, our leveling kits are designed to elevate your vehicle's performance and style.",
      link: "",
    },
    {
      icon: BounceIcon,
      iconAltText: "Icon of a ball bouncing",
      title: "Suspension",
      bodyText: "Improve your ride quality and vehicle stability with our expert suspension services.",
      link: "",
    },
  ],
};

export const testimonials = {
  header: 'What Our Customers Say',
  bodyText: 'Customer satisfaction drives everything we do at USC Tires & Service. We take pride in going the extra mile to ensure every visit leaves a positive impression. Hear directly from those we’ve had the pleasure of serving.',
  slider: [
    {
      image: '',
      name: 'Crystal Jordan',
      title: '',
      review: 'Fantastic service! Dropped my car off and they had it ready in less than 2 hours. Great prices and they are super friendly there. They made sure I understood everything they were going to do before they did it. I will definitely be using them again!'
    },
    {
      image: '',
      name: 'Alice McRae',
      title: '',
      review: 'Great place for tires, oil changes, etc. Great place  clean, nice waiting area, complementary coffee ,Internet access, large TV. Everyone is friendly.'
    },
    {
      image: '',
      name: 'Boone Givens',
      title: 'Google Review',
      review: '5 star service receiving my new tires!'
    },
    {
      image: '',
      name: 'Laurie Caminas Gilchrist',
      title: 'Facebook Review',
      review: 'Kind professional staff. Very quick to get started on my issue. Can’t thank them enough. I will definitely be going back!!!'
    },
  ]
};

export const contact = {
  header: 'Get in Touch',
  bodyText: "Have a question or need to schedule a service? We’re here to help. Reach out to us through the details below, and our team will get back to you promptly.",
}