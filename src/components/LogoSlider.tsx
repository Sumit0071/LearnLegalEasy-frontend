import React from "react";
import Slider from "./Slider/Slider";

interface LogoSliderProps {
  images: string[];
}

const LogoSlider: React.FC<LogoSliderProps> = ({ images }) => {
  return (
    <Slider
      width="150px"
      duration={25}
      toRight={false}
      pauseOnHover={true}
      blurBorders={true}
      blurBorderColor="#f9f9f9"
    >
      {images.map((src, i) => (
        <Slider.Slide key={i}>
          <img
            src={src}
            alt={`Logo ${i}`}
            style={{
              height: "50px",
              width: "auto",
              objectFit: "contain",
            }}
          />
        </Slider.Slide>
      ))}
    </Slider>
  );
};

export default LogoSlider;
