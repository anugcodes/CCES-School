import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import Background from "../assets/crowdbg.jpg";
import HomePlant from "../assets/homeplant.png";
import "../css/home-page.css";

import { Link } from "react-router-dom";
import Discover from "../components/discover";
import WhyChoose from "../components/why";
import Community from "../components/community/createCommunity";
export default function HomePage() {
  return (
    <>
      <Box
        sx={{
          background: `url(${Background})`,
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            background: "rgba(255,255,255,0.7)",
            minHeight: "90vh",
            padding: "2rem 0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Container maxWidth="lg">
            <Stack
              direction="column"
              sx={{ height: "100%" }}
              alignItems={"center"}
              spacing={2}
            >
              <Typography
                variant="h2"
                sx={{
                  width: "100%",
                  fontWeight: "bold",
                  color: "#007bff",
                  textAlign: "center",
                  textTransform: "uppercase",
                }}
              >
                <span className="heading-first-letter">W</span>elcome to{" "}
                <span className="heading-first-letter">I</span>ntruder Community{" "}
                <span className="heading-first-letter">E</span>mbrace{" "}
                <span className="heading-first-letter">Y</span>our{" "}
                <span className="heading-first-letter">Y</span>uthentic{" "}
                <span className="heading-first-letter">S</span>elf .
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  textAlign: "center",
                  color: "#007bff",
                  fontWeight: "normal",
                }}
              >
                Breaking Barriers, Embracing Diversity
              </Typography>
              <button
                style={{
                  padding: "1.5rem 6rem",
                  border: "none",
                  borderRadius: "2rem",
                  background:
                    "linear-gradient(50deg, #007bff 0%, #f86c6f 100%)",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ color: "#fff", fontWeight: "normal" }}
                >
                  Join Us
                </Typography>
              </button>
            </Stack>
          </Container>
        </Box>
      </Box>

      {/* second page- who are we */}
      <Box
        sx={{
          background: `url(${Background})`,
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            background: `linear-gradient(90deg, rgba(253,251,252,0.8744747899159664) 70%, rgba(253,205,183,0.87) 70%)`,
            minHeight: "100vh",
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Container maxWidth="lg">
            <Box>
              <Stack
                direction={"row"}
                spacing={2}
                alignItems={"center"}
                sx={{ height: "100%" }}
              >
                <Stack
                  direction={"column"}
                  spacing={2}
                  className="contentImageStack"
                >
                  <Typography
                    variant="h2"
                    sx={{
                      width: "100%",
                      fontWeight: "normal",
                      color: "#007bff",
                    }}
                  >
                    Who are we?
                  </Typography>
                  <Typography variant="h6">
                    Intruder is a vibrant and inclusive genderless community
                    that celebrates individuality, encourages open
                    conversations, and fosters an environment of acceptance. We
                    believe in breaking away from traditional gender norms and
                    embracing the unique identities that make us who we are.
                    Join us as we create a safe space for everyone to explore
                    their authentic selves without judgment or prejudice
                  </Typography>
                  <Link
                    to="/"
                    style={{
                      color: "#007bff",
                      textDecoration: "none",
                      border: "2px solid #feb6b5",
                      maxWidth: "180px",
                      textAlign: "center",
                      padding: ".5rem 1rem",
                    }}
                  >
                    Read More
                  </Link>
                </Stack>
                <div className="imageContainer">
                  <img src={HomePlant} alt="who are we" className="image" />
                </div>
              </Stack>
            </Box>
          </Container>
        </Box>
      </Box>
      <Discover />
      <WhyChoose />
      <Community />
    </>
  );
}
