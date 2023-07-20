import { Grid, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { css } from "@emotion/react";

import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import "../../css/swiper.css"

import { Pagination, Autoplay } from "swiper/modules";
import { useEffect, useRef } from "react";

const TopHeading = () => {
    let swiperRef = useRef();
  useEffect(() => {
    if (swiperRef.current) {
      let swiper = swiperRef.current.swiper;
      swiper.on("slideChange", () => {});
    }
  }, []);

  return (
    <Grid container maxWidth={"xl"} columnGap={2}>
      <Swiper
      breakpoints={{
        0: {slidesPerView: 1},
        600: {slidesPerView: 3}
      }}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
          ref={swiperRef}
      >
        <Grid item md={4} xs={12}>
        <SwiperSlide>
            <img
              src="https://images.bewakoof.com/t1080/men-s-blue-solid-oversize-jogger-21-580450-1686198943-1.jpg?tr=q-100"
              alt="img1"
            />
        </SwiperSlide>
        </Grid>
        <Grid item md={4} xs={12}>
        <SwiperSlide>
            <img
              src="https://images.bewakoof.com/t1080/women-s-khaki-solid-cargo-pants-1-582919-1688995420-1.jpg"
              alt="img2"
            />
        </SwiperSlide>
        </Grid>
        <Grid item md={4} xs={12}>
        <SwiperSlide>
            <img
              src="https://images.bewakoof.com/t1080/women-s-black-solid-oversize-jogger-555636-1680593160-1.jpg"
              alt="img3"
            />
        </SwiperSlide>
        </Grid>
        <Grid item md={4} xs={12}>
        <SwiperSlide>
            <img
              src="https://images.bewakoof.com/t1080/men-s-khaki-solid-cargo-shorts-18-582907-1686199735-1.jpg"
              alt="img4"
            />
        </SwiperSlide>
        </Grid>
        <Grid item md={4} xs={12}>
        <SwiperSlide>
            <img
              src="https://images.bewakoof.com/t1080/men-s-purple-king-black-panther-graphic-printed-boxy-fit-vest-595660-1688450753-1.jpg"
              alt="img4"
            />
        </SwiperSlide>
        </Grid>
        <Grid item md={4} xs={12}>
        <SwiperSlide>
            <img
              src="https://images.bewakoof.com/t1080/men-s-gardenia-pink-oversized-t-shirt-580013-1686831482-1.jpg"
              alt="img4"
            />
        </SwiperSlide>
        </Grid>
      </Swiper>
    </Grid>
  );
};

export default TopHeading;




