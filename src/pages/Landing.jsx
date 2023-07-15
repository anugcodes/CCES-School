import React from "react";
import About from "../components/landing/About";
import Category from "../components/landing/Category";
import Hero from "../components/landing/Hero";
import Products from "../components/landing/Products";
import "../css/landing.css";

function Landing() {
  return (
    <>
      <Hero />
      <Products />
      <About />
      <Category />
    </>
  );
}

export default Landing;
