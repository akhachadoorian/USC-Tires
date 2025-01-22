import React from "react";
import { useSwiper } from "swiper/react";
import Arrow from "../../data/Icons/arrow-right-solid.svg";

function SlidePrevButton() {
  const swiper = useSwiper();

  return (
    <button
    className="prev-btn"
      onClick={() => swiper?.slidePrev()}
      disabled={!swiper}
    >
      <img src={Arrow} alt="Up arrow icon" className="up-arrow" />
    </button>
  );
}

export default SlidePrevButton