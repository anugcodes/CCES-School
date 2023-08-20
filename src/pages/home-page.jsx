import { React, useEffect } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import Background from "../assets/crowdbg.jpg";
import HomePlant from "../assets/homeplant.png";
import "../css/home-page.css";

import { Link } from "react-router-dom";
import Discover from "../components/discover";
import WhyChoose from "../components/why";
import Community from "../components/community/createCommunity";
import Footer from "../components/footer";

export default function HomePage() {
  // useEffect(() => {
  //   const parallaxSections = document.querySelectorAll(".parallax-section");
  //   const handleScroll = () => {
  //     parallaxSections.forEach((section) => {
  //       const speed = section.getAttribute("data-speed") || 2; // Adjust the speed as needed
  //       const yPos = -window.scrollY / speed;
  //       section.style.backgroundPosition = `center ${yPos}px`;
  //     });
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      <div>
        <Box
          sx={{
            background: `url(${Background})`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
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
                  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-delay="200"
                  data-aos-once="true"
                  data-aos-easing="ease-in-sine"
                >
                  <span className="heading-first-letter">W</span>elcome to{" "}
                  <span className="heading-first-letter">I</span>ntruder
                  Community <span className="heading-first-letter">E</span>
                  mbrace <span className="heading-first-letter">Y</span>our{" "}
                  <span className="heading-first-letter">Y</span>uthentic{" "}
                  <span className="heading-first-letter">S</span>elf
                </Typography>
                <Stack
                  direction="column"
                  alignItems="center"
                  spacing={1}
                  data-aos="fade-left"
                  data-aos-offset="200"
                  data-aos-delay="300"
                  data-aos-once="true"
                  data-aos-easing="ease-in-sine"
                >
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
                      maxWidth: "320px",
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
              </Stack>
            </Container>
          </Box>
        </Box>

        {/* second page- who are we */}
        <Box
          id="about"
          sx={{
            background: `url(${Background})`,
            backgroundSize: "cover",
            // backgroundAttachment:"fixed"
          }}
          className="parallax-section"
        >
          <Box
            sx={{
              background: `linear-gradient(90deg, rgba(253,251,252,0.92) 70%, rgba(253,205,183,0.87) 70%)`,
              minHeight: { lg: "90vh", xs: "auto" },
              position: "relative",
              display: "flex",
              alignItems: "center",
              padding: { xs: "2rem 0", lg: ".5rem 0" },
            }}
          >
            <Container maxWidth="lg">
              <Box>
                <Stack
                  direction={{ md: "row", xs: "column" }}
                  spacing={2}
                  alignItems={"center"}
                  sx={{ height: "100%" }}
                >
                  <Stack
                    direction={"column"}
                    spacing={2}
                    className="contentImageStack"
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-delay="200"
                    data-aos-once="true"
                    data-aos-easing="ease-in-sine"
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
                      conversations, and fosters an environment of acceptance.
                      We believe in breaking away from traditional gender norms
                      and embracing the unique identities that make us who we
                      are. Join us as we create a safe space for everyone to
                      explore their authentic selves without judgment or
                      prejudice
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
                    <img
                      src={HomePlant}
                      alt="who are we"
                      className="image"
                      data-aos="fade-left"
                      data-aos-offset="300"
                      data-aos-delay="200"
                      data-aos-once="true"
                      data-aos-easing="ease-in-sine"
                    />
                  </div>
                </Stack>
              </Box>
            </Container>
          </Box>
        </Box>
        <Discover />
        <WhyChoose />
        <Community />
      </div>
      <Footer />
    </>
  );
}
