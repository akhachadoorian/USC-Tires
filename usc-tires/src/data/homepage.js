import ManWorkOnCar from "../data/Images/ManWorkingOnCar.png"
import TireImage from "../data/Images/Tire.png"
import LocationNode from "../data/Icons/LocationNode.svg"
import AwardIcon from "../data/Icons/AwardIcon.svg"
import GroupIcon from "../data/Icons/GroupIcon.svg"
import ServeIcon from "../data/Icons/ServeIcon.svg"

export const hero = {
    img: TireImage,
};


export const aboutUs = {
    header: 'About Us',
    bodyText: 'USC Tires is a family-owned, locally-operated business rooted in over 50 years of experience, dedicated to exceptional service, personal connections, and keeping our community safely on the road.',
    buttonText: 'Learn More',
    buttonURL: '',
    img: ManWorkOnCar,
    values: [
        {
            icon: LocationNode,
            iconAltText: 'Map location icon',
            header: 'Local Expertise',
            bodyText: "We're Mobile natives who understand your needs."
        },
        {
            icon: AwardIcon,
            iconAltText: 'Award ribbon with a check in it icon  ',
            header: 'Decades of Experience',
            bodyText: 'Building on 50+ years of industry knowledge.'
        },
        {
            icon: GroupIcon,
            iconAltText: 'Group of people icon',
            header: 'Family-Owned Values',
            bodyText: 'We treat every customer like part of our family.'
        },
        {
            icon: ServeIcon,
            iconAltText: 'Hand serving dish icon',
            header: 'Customer-Focused Care',
            bodyText: 'We strive to put the customer first, providing tailored solutions and attentive service.'
        }
    ]
}

