"use client";

import { useSwiper } from "swiper/react";
import { PiCaretRightBold, PiCaretLeftBold } from "react-icons/pi";


const WorkSlideBtns = ({ containerStyles ,btnStyles, iconsStyles}) => {
    const swiper = useSwiper();
    return (
        <div className={containerStyles}>
            <button className={btnStyles} onclick>
                <PiCaretLeftBold className={iconsStyles}/>
            </button>
            <button className={btnStyles}>
                <PiCaretRightBold className={iconsStyles}/>
            </button>
        </div>
    )
 }

 export default WorkSlideBtns;