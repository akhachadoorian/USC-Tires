import React from "react";
import { useSwiper } from "swiper/react";
import Arrow from "../../data/Icons/arrow-right-solid.svg";

function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button
      className="next-btn"
      onClick={() => swiper?.slideNext()}
      disabled={!swiper}
    >
      <img src={Arrow} alt="Down arrow icon" className="down-arrow" />
    </button>
  );
}

export default SlideNextButton;
