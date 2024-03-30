import React, { useRef, useState, useEffect } from "react";
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './about.css';
import creact from '../images/creact.png';
import cjavascript from '../images/cjavascript.png';
import cdigital from '../images/cdigital.png';
import cmongodb from '../images/cmongodb.png';
import cgoogle from '../images/cgoogle.png';
import { IoIosCloseCircleOutline } from "react-icons/io";

const Certification = () => {
  const [model, setModel] = useState(false);
  const [image, setimage] = useState('');
  const handleClick = (e) => {
    setimage(e.target.src);
    setModel(true);
  };

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

        <SwiperSlide><img src={creact} name="creact" onClick={handleClick} /><span>ReactJs</span></SwiperSlide>
        <SwiperSlide><img src={cjavascript} name="cjavascript" onClick={handleClick} /><span>JavaScript</span></SwiperSlide>
        <SwiperSlide><img src={cmongodb} onClick={handleClick} /><span>MongoDb</span></SwiperSlide>
        <SwiperSlide><img src={cdigital} onClick={handleClick} /><span>Digital Marketing</span></SwiperSlide>
        <SwiperSlide><img src={cgoogle} onClick={handleClick} /><span>Google Analytics</span></SwiperSlide>
      </Swiper>
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
