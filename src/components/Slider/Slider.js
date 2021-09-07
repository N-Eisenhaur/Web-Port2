import React, { useState } from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'

export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if (slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === dataSlider.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(dataSlider.length)//if index is equal to 1 go back to last slide in index 
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                        key={obj.id}//references data slider and its ids
                        className={slideIndex === index + 1 ? "slide active-anim" : "slide"}//css classes active if true
                    >
                        <img
                            src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.png`}
                        />

                        <p className='cap'>{obj.title} {obj.subTitle}    {obj.CapTion}</p>


                    </div>



                    /*{process.env.PUBLIC_URL adds your websiste url
                     then `/Imgs/img${index + 1}.jpg` references your images when you build your final folder
                     
                     
                     
                                          btn move slide arrow fuction combines with next slide

                     */
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />

            <div className="container-dots">
                {Array.from({ length: 7 }).map((item, index) => (
                    <div
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}
