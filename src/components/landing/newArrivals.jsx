import { Box, Grid, Container, Stack, Typography } from "@mui/material";
import ProductCard from "../ProductCard/productCard";
import { Swiper, SwiperSlide } from "swiper/react";
// import { useProductContext } from "../../contextProvider/MyContext"

import productImage from "../../assets/shoe.jpg";
import shirtImage from "../../assets/tshirt.jpg";
import topImage from "../../assets/top.jpg";
import bracelet from "../../assets/bracelet.jpg";
import neckless from "../../assets/neckless.jpg";

import { css } from "@emotion/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../css/swiper.css";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useEffect, useRef } from "react";




const NewArrival = () => {
  let swiperRef = useRef();
  useEffect(() => {
    if (swiperRef.current) {
      let swiper = swiperRef.current.swiper;
      swiper.on("slideChange", () => {});
    }
  }, []);

  // const { isLoading, bestseller } = useProductContext();
  // console.log("featured products are : ", bestseller)

  const styles = {
    mainText: css`
      padding: 1rem 0;
      text-align: center;
      font-size: 3rem;
      font-family: Lilita One;
    `,
    cards: css`
      display: flex;
      align-items: center;
      justify-content: center;
    `,
  };


  return (
    <>
      <Typography textAlign={"center"} sx={styles.mainText}>
        New Arrivals
      </Typography>
      <Grid container maxWidth={"xl"} paddingBottom={"1rem"}>
      <Grid item md={12} xs={12}>
        <Swiper
        breakpoints={{
          0: {slidesPerView: 2, spaceBetween: 10},
          600: {slidesPerView: 4, spaceBetween: 10},
          900: {slidesPerView: 6, spaceBetween: 20},
        }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          ref={swiperRef}
        >
        {products.map((product, index) => (
          
         <SwiperSlide key={index}> <ProductCard products={product} /></SwiperSlide>
         
        ))
        }
        </Swiper>
        </Grid>
      </Grid>
    </>
  );
};

const products = [
  {
    Name: "Product1",
    image: productImage,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
    price: "Rs.1200",
  },
  {
    Name: "Product2",
    image: neckless,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
    price: "Rs. 1200",
  },
  {
    Name: "Product3",
    image: topImage,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
    price: "Rs. 1200",
  },
  {
    Name: "Product4",
    image: bracelet,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
    price: "Rs. 1200",
  },
  {
    Name: "Product5",
    image: shirtImage,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
    price: "Rs. 1200",
  },
  {
    Name: "Product5",
    image: topImage,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
    price: "Rs. 1200",
  },
  {
    Name: "Product5",
    image: productImage,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
    price: "Rs. 1200",
  },
];

export default NewArrival;
