<<<<<<< HEAD
import React from 'react'
import '../../css/landing.css'
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function Hero() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                // navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className='position-relative d-flex justify-content-center align-items-center'>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" className='position-absolute' alt='img'/>
                    <div className='position-absolute'>
                        <h1 className='text-white'>Hello</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='position-relative d-flex justify-content-center align-items-center'>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" className='position-absolute' alt='img'/>
                    <div className='position-absolute'>
                        <h1 className='text-white'>Welcome</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='position-relative d-flex justify-content-center align-items-center'>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" className='position-absolute' alt='img'/>
                    <div className='position-absolute'>
                        <h1 className='text-white'>to</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='position-relative d-flex justify-content-center align-items-center'>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" className='position-absolute' alt='img'/>
                    <div className='position-absolute'>
                        <h1 className='text-white'>nude</h1>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Hero
=======
import React from "react";
// import '../../css/landing.css'
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "@nextui-org/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Hero() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        // navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="position-relative d-flex justify-content-center align-items-center">
          <Card isPressable isHoverable css={{ w: "100%", h: "100%" }}>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                showSkeleton
                src="https://swiperjs.com/demos/images/nature-1.jpg"
                objectFit="cover"
                width="100%"
                height="100%"
                alt="Img"
              />
            </Card.Body>
          </Card>
          <div className="position-absolute">
            <h1 className="text-white">Hello welcome to NUDE</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="position-relative d-flex justify-content-center align-items-center">
          <Card isPressable isHoverable css={{ w: "100%", h: "100%" }}>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                showSkeleton
                src="https://swiperjs.com/demos/images/nature-2.jpg"
                objectFit="cover"
                width="100%"
                height="100%"
                alt="Img"
              />
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide className="position-relative d-flex justify-content-center align-items-center">
          <Card isPressable isHoverable css={{ w: "100%", h: "100%" }}>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                showSkeleton
                src="https://swiperjs.com/demos/images/nature-3.jpg"
                objectFit="cover"
                width="100%"
                height="100%"
                alt="Img"
              />
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide className="position-relative d-flex justify-content-center align-items-center">
          <Card isPressable isHoverable css={{ w: "100%", h: "100%" }}>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                showSkeleton
                src="https://swiperjs.com/demos/images/nature-4.jpg"
                objectFit={{xs: 'contain', sm: 'cover'}}
                width="100%"
                height="100%"
                alt="Img"
              />
            </Card.Body>
          </Card>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Hero;
>>>>>>> ankit-dev
