import React from "react";
import "./Slider.css";
import leftArrow from "./icons/left-arrow.svg";
import rightArrow from "./icons/right-arrow.svg";

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}//if next is true slide next else : slide prev
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );//if next is true use right arrow else left
}
