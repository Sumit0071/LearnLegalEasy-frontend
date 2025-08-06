import React, { ReactNode, useRef } from "react";
import { motion } from "framer-motion";
import "./Slider.css";

interface SliderProps {
  width?: string;
  duration?: number;
  toRight?: boolean;
  pauseOnHover?: boolean;
  blurBorders?: boolean;
  blurBorderColor?: string;
  children: ReactNode;
}

const Slider: React.FC<SliderProps> & {
  Slide: React.FC<{ children: ReactNode }>;
} = ({
  duration = 20,
  toRight = false,
  pauseOnHover = false,
  blurBorders = false,
  blurBorderColor = "#ffffff",
  children,
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="slider-container"
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <motion.div
        className="slider-track"
        style={{
          display: "flex",
          gap: "3rem",
          width: "fit-content",
        }}
        animate={{
          x: toRight ? ["100%", "0%"] : ["0%", "-100%"],
        }}
        transition={{
          ease: "linear",
          duration: duration,
          repeat: Infinity,
        }}
        onHoverStart={() => {
          if (pauseOnHover) {
            sliderRef.current?.classList.add("paused");
          }
        }}
        onHoverEnd={() => {
          if (pauseOnHover) {
            sliderRef.current?.classList.remove("paused");
          }
        }}
        ref={sliderRef}
      >
        {[children, children].flat()}
      </motion.div>

      {blurBorders && (
        <>
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "60px",
              background: `linear-gradient(to right, ${blurBorderColor} 0%, transparent 0%)`,
              pointerEvents: "none",
              zIndex: 1,
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: "60px",
              background: `linear-gradient(to left, ${blurBorderColor} 0%, transparent 0%)`,
              pointerEvents: "none",
              zIndex: 1,
            }}
          />
        </>
      )}
    </div>
  );
};

Slider.Slide = ({ children }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: "150px",
    }}
  >
    {children}
  </div>
);

export default Slider;
