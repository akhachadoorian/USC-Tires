import React, { useState, useEffect }from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SlideNextButton from "./SliderNextBtn";
import SlidePrevButton from "./SliderPrevBtn";
import Slide from "./Slide";

function useDeviceDetection() {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 800);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 800);
    handleResize(); // Trigger on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

function TestimonialSlider({ data }) {
  const isMobile = useDeviceDetection();

  return (
    <div className="testimonial-slider">
      <Swiper
        spaceBetween={10}
        slidesPerView={isMobile ? 1 : 2}
        slidesPerGroup={1} 
        direction={isMobile ? "horizontal" : "vertical"}
        loop = {true}
      >
        {data.map((d, key) => (
          <SwiperSlide key={key}>
            {key % 2 == 0 ? (
              <Slide
                color={"red"}
                name={d.name}
                title={d.title}
                review={d.review}
              />
            ) : (
              <Slide
                color={"blue"}
                name={d.name}
                title={d.title}
                review={d.review}
              />
            )}
          </SwiperSlide>
        ))}

        {/* Custom Buttons */}
        <div className="slider-btns">
          <SlidePrevButton />
          <SlideNextButton />
        </div>
      </Swiper>
    </div>
  );
}

export default TestimonialSlider;
