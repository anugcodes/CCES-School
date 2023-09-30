import React from "react";
import { Carousel } from "react-bootstrap";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import bg1 from "../../assets/bg1.jpg";
import bg2 from "../../assets/bg2.jpg";
import bg3 from "../../assets/bg3.jpg";
import bg4 from "../../assets/bg4.jpg";
import bg5 from "../../assets/bg5.jpg";
import bg6 from "../../assets/bg6.jpg";

function Hero() {
  return (
    <Carousel slide={false} controls={false} indicators={false}>
      {heroImages.map((image, index) => (
        <Carousel.Item key={index}>
          <img src={image} alt="" style={{ width: "100vw" }} />
          <Carousel.Caption style={{ marginBottom: "1vh" }}>
            <LinkToSurvey />
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Hero;

const LinkToSurvey = () => {
  const navigate = useNavigate();
  return (
    <Button
      variant="contained"
      sx={{
        color: "white",
        textTransform: "capitalize",
        fontSize: "1.5rem",
        padding: ".75rem 2.5rem",
        borderRadius: ".5rem",
        backgroundColor: "#00aeef",
      }}
      onClick={() => navigate({ pathname: "/survey" })}
    >
      take the survey
    </Button>
  );
};

const heroImages = [bg1, bg2, bg3, bg4, bg5, bg6];
