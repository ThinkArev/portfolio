import React, { useRef, useState, useEffect } from "react";
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './about.css';
import cFullStackSite from '../images/fullStackSite.png';
import cjavascript from '../images/freeCodeCampCertification.png';
import cFullStacks from '../images/fullStack.png';
import cHooks from "../images/Hooks.png";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Certification = () => {
  const [model, setModel] = useState(false);
  const [image, setimage] = useState('');
  const handleClick = (e) => {
    setimage(e.target.src);
    setModel(true);
  }

  useEffect(() => {
    const modelclose = (event) => {
      const sliding = document.getElementById('sliding');
      if (!sliding.contains(event.target)) {
        setModel(false);
      }
    };

    document.addEventListener("click", modelclose);
    return () => {
      document.removeEventListener('click', modelclose);
    };
  }, []);

  return (
    <>
      <div className="certificstebg">
        <p className="text-5xl font-bold border-b-4 border-gray-500 pt-20 text-center">
          Certification
        </p>
        <br />
        <p className="py-0 text-center text-3xl">Some of the certifications that I have...</p>
      </div>
      <Swiper id="sliding"
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        slidesPerView={1}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2
          },
        }}
      >

        <SwiperSlide><img src={cFullStackSite} name="creact" onClick={handleClick} /><span>ReactJs</span></SwiperSlide>
        <SwiperSlide><img src={cjavascript} name="cjavascript" onClick={handleClick} /><span>JavaScript</span></SwiperSlide>
        <SwiperSlide><img src={cHooks} onClick={handleClick} /><span>Hooks</span></SwiperSlide>
        <SwiperSlide><img src={cFullStacks} onClick={handleClick} /><span>Full Stack </span></SwiperSlide>
        {/* <SwiperSlide><img src={cgoogle} onClick={handleClick} /><span>Google Analytics</span></SwiperSlide> */}
      </Swiper>s
      {
        model && <div className="model">

          <img src={image} />
          <span><IoIosCloseCircleOutline className="SlClose" /></span>

        </div>
      }
    </>
  );
};

export default Certification;
