import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SlideNextButton from "./SliderNextBtn";
import SlidePrevButton from "./SliderPrevBtn";
import Slide from "./Slide";

function TestimonialSlider({ data }) {
  return (
    <div className="testimonial-slider">
      <Swiper
        spaceBetween={30}
        slidesPerView={2}
        slidesPerGroup={1} 
        direction="vertical"
        loop = {true}
        style={{
          height: "550px",
        }}
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
