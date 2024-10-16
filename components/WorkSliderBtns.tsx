"use client";

import { useSwiper } from "swiper/react";
import { PiCaretRightBold, PiCaretLeftBold } from "react-icons/pi";

import { FC } from "react"; // Import FC for typing functional components

interface WorkSliderBtnsProps {
  containerStyles?: string; // Optional styles for container
  btnStyles?: string;       // Optional styles for buttons
  iconsStyles?: string;     // Optional styles for icons
}

const WorkSliderBtns: FC<WorkSliderBtnsProps> = ({ containerStyles, btnStyles, iconsStyles }) => {
  const swiper = useSwiper(); // Hook to control Swiper slider
  
  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};
 export default WorkSliderBtns;