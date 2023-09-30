import React from 'react'
import { Carousel } from "react-bootstrap";
import Button from "@mui/material/Button";


import bg1 from '../../assets/bg1.png'
import bg2 from '../../assets/bg2.jpg'
import bg3 from '../../assets/bg3.jpg'
import bg4 from '../../assets/bg4.png'
import bg5 from '../../assets/bg5.png'
import bg6 from '../../assets/bg6.png'

function Hero() {
    return (
        <Carousel slide={false} controls={false} indicators={false}>
            <Carousel.Item>
                <img src={bg1} alt="" style={{ width: "100vw" }} />
                <Carousel.Caption style={{ marginBottom: "1vh" }}>
                    <Button variant="contained" size="large">Take the survey</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={bg2} alt="" style={{ width: "100vw" }} />
                <Carousel.Caption style={{ marginBottom: "1vh" }}>
                    <Button variant="contained" size="large">Take the survey</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={bg3} alt="" style={{ width: "100vw" }} />
                <Carousel.Caption style={{ marginBottom: "1vh" }}>
                    <Button variant="contained" size="large">Take the survey</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={bg4} alt="" style={{ width: "100vw" }} />
                <Carousel.Caption style={{ marginBottom: "1vh" }}>
                    <Button variant="contained" size="large">Take the survey</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={bg5} alt="" style={{ width: "100vw" }} />
                <Carousel.Caption style={{ marginBottom: "1vh" }}>
                    <Button variant="contained" size="large">Take the survey</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={bg6} alt="" style={{ width: "100vw" }} />
                <Carousel.Caption style={{ marginBottom: "1vh" }}>
                    <Button variant="contained" size="large">Take the survey</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Hero