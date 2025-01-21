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

export const hero = {
  img: TireImage,
};

export const aboutUs = {
  header: "About Us",
  bodyText:
    "USC Tires is a family-owned, locally-operated business rooted in over 50 years of experience, dedicated to exceptional service, personal connections, and keeping our community safely on the road.",
  buttonText: "Learn More",
  buttonURL: "",
  img: ManWorkOnCar,
  values: [
    {
      icon: LocationNode,
      iconAltText: "Map location icon",
      header: "Local Expertise",
      bodyText: "We're Mobile natives who understand your needs.",
    },
    {
      icon: AwardIcon,
      iconAltText: "Award ribbon with a check in it icon  ",
      header: "Decades of Experience",
      bodyText: "Building on 50+ years of industry knowledge.",
    },
    {
      icon: GroupIcon,
      iconAltText: "Group of people icon",
      header: "Family-Owned Values",
      bodyText: "We treat every customer like part of our family.",
    },
    {
      icon: ServeIcon,
      iconAltText: "Hand serving dish icon",
      header: "Customer-Focused Care",
      bodyText:
        "We strive to put the customer first, providing tailored solutions and attentive service.",
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
      bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "",
    },
    {
      icon: CautionIcon,
      iconAltText: "Icon of a caution symbol",
      title: "Brakes",
      bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "",
    },
    {
      icon: AlignmentIcon,
      iconAltText: "Icon of the text alignment symbol",
      title: "Alignment",
      bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "",
    },
    {
      icon: TempIcon,
      iconAltText: "Icon of a thermometer",
      title: "A/C & Heating",
      bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "",
    },
    {
      icon: OilIcon,
      iconAltText: "Icon of an oil can",
      title: "Oil Change",
      bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "",
    },
    {
      icon: TuneUpIcon,
      iconAltText: "Icon of car with caution symbol",
      title: "Tune Up",
      bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "",
    },
    {
      icon: WrenchIcon,
      iconAltText: "Icon of a wrench",
      title: "Leveling Kits",
      bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "",
    },
    {
      icon: BounceIcon,
      iconAltText: "Icon of a ball bouncing",
      title: "Suspension",
      bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "",
    },
  ],
};
