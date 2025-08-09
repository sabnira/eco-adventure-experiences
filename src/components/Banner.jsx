import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import bg1 from "../assets/bg_1.jpg";
import bg2 from "../assets/bg_2.jpg";
import bg3 from "../assets/bg_3.jpg";
import bg4 from "../assets/bg_4.jpg";


const slides = [
    {
        img: bg1,
        title: "Mountain Treks",
        text: "Trek to the base of Mount Everest with breathtaking views.\nExperience the vibrant Sherpa culture along the way."
    },
    {
        img: bg2,
        title: "Forest Expeditions",
        text: "Venture deep into lush green forests rich with wildlife.\nReconnect with nature in its purest form."
    },
    {
        img: bg3,
        title: "Wildlife Safaris",
        text: "Embark on thrilling safaris to spot majestic creatures.\nCapture unforgettable moments in the wild."
    },
    {
        img: bg4,
        title: "Mangrove Forest Expeditions",
        text: "Explore winding waterways through dense mangroves.\nWitness unique plants and animals up close."
    }
];


const Banner = () => {
    return (
        <Carousel
            showArrows={true}
            autoPlay={true}
            infiniteLoop={true}
            interval={2000}
            showThumbs={false}
            showStatus={false}
            stopOnHover={true}
            showIndicators={false}
        >
            {slides.map((slide, index) => (
                <div className="hero" key={index}>
                    <img className="w-full h-[650px]" src={slide.img} alt={slide.title} />
                    <div className="hero-overlay"></div>
                    <div className="hero-content text-white text-center w-full">
                        <div className="max-w-full">
                            <p className="mb-5 text-7xl font-bold">{slide.title}</p>
                            <p className="mb-5 text-2xl">{slide.text}</p>
                            <button className="btn bg-[#D5E880] border-none shadow-none px-6 text-lg font-thin rounded-br-3xl hover:bg-white hover:rounded-br-sm transition-all duration-300 ease-in-out">
                                Explore More
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

export default Banner;
