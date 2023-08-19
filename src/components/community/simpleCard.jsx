import {
  Box,
  Stack,
  Typography,
  Card,
  CardContent,
  Button,
  TextField,
  MenuItem,
} from "@mui/material";
import { Input } from "@mui/material";
import { css } from "@emotion/react";

import { useState } from "react";

import sun from "../../assets/beach.png";
import community from "../../assets/people.png";
import recycle from "../../assets/recycle-symbol.png";

const CommunityCard = () => {
  const places = [
    {
      value: "Bhubaneswar",
    },
    {
      value: "Delhi",
    },
    {
      value: "Kolkata",
    },
  ];

  const [selectedPlace, setPlace] = useState("");

  const styles = {
    cards: {
      position: "relative",
      background: "#ff6670c5",
      borderRadius: "1.5rem",
      padding: ".5rem",
      maxWidth: "280px",
      "@media (max-width: 900px)": {
        maxWidth: "480px",
        left: "20%",
        right: "50%",
      },
    },
    button: {
      color: "white",
      background: "#007bff",
      borderRadius: "0.8rem",
      fontWeight: "bold",
    },
  };

  return (
    <Box sx={{ paddingTop: "5rem" }}>
      <Stack
        direction={{ md: "row", xs: "column" }}
        spacing={1}
        alignContent={"center"}
      >
        <Card
          sx={styles.cards}
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <CardContent>
            <Stack
              direction={"column"}
              spacing={1}
              sx={{ height: "100%" }}
              justifyContent={"space-evenly"}
            >
              <img
                src={sun}
                style={{
                  maxWidth: "8rem",
                }}
              />
              <Box>
                <Typography
                  variant="h1"
                  sx={{ fontWeight: "bold", color: "white" }}
                >
                  30
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "600",
                    color: "white",
                    textTransform: "uppercase",
                  }}
                >
                  Communities Built
                </Typography>
              </Box>
              <Button sx={styles.button}>See Details</Button>
            </Stack>
          </CardContent>
        </Card>
        <Card
          sx={styles.cards}
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-delay="500"
        >
          <CardContent>
            <Stack
              direction={"column"}
              spacing={1}
              sx={{ height: "100%" }}
              justifyContent={"space-evenly"}
            >
              <img
                src={recycle}
                style={{
                  maxWidth: "8rem",
                }}
              />
              <Box>
                <Typography
                  variant="h1"
                  sx={{ fontWeight: "bold", color: "white" }}
                >
                  40
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "600",
                    color: "white",
                    textTransform: "uppercase",
                  }}
                >
                  Environmental Projects
                </Typography>
              </Box>
              <Button sx={styles.button}>See Details</Button>
            </Stack>
          </CardContent>
        </Card>
        <Card
          sx={styles.cards}
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-delay="1000"
        >
          <CardContent>
            <Stack
              direction={"column"}
              spacing={1}
              sx={{ height: "100%" }}
              justifyContent={"space-evenly"}
            >
              <img
                src={community}
                style={{
                  maxWidth: "8rem",
                }}
              />
              <Box>
                <Typography
                  variant="h1"
                  sx={{ fontWeight: "bold", color: "white" }}
                >
                  550
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "600",
                    color: "white",
                    textTransform: "uppercase",
                  }}
                >
                  Members from all over the world
                </Typography>
              </Box>
              <Button sx={styles.button}>See Details</Button>
            </Stack>
          </CardContent>
        </Card>

        {/* box form */}
        <Box
          item
          md={4}
          sx={{
            background: "#ff6670c5",
            padding: "2rem",
            borderRadius: "1.5rem",
            maxWidth: "360px",
            "@media (max-width: 900px)": {
              maxWidth: "480px",
            },
          }}
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-delay="1500"
        >
          <Stack spacing={2} height={"100%"}>
            <Typography
              variant="h5"
              sx={css`
                text-transform: uppercase;
                font-weight: bold;
                color: #007bff;
              `}
            >
              Create your own community
            </Typography>
            <TextField
              // size="small"
              placeholder="Full Name"
              InputProps={{
                style: {
                  borderRadius: ".75rem",
                  background: "white",
                },
              }}
            />
            <TextField
              // size="small"
              helperText="Choose Your City"
              select
              value={selectedPlace}
              InputProps={{
                style: {
                  borderRadius: ".75rem",
                  background: "white",
                },
              }}
              SelectProps={{
                displayEmpty: true, // This will allow displaying an empty item as a placeholder.
                renderValue: (value) =>
                  value === "" ? "Select a City" : value, // Custom rendering for the selected value.
              }}
            >
              {places.map((place, index) => (
                <MenuItem
                  key={index}
                  onClick={() => {
                    setPlace(place.value);
                    console.log(selectedPlace);
                  }}
                  value={place.value}
                >
                  {place.value}
                </MenuItem>
              ))}
            </TextField>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "bold",
                color: "#007bff",
              }}
            >
              Birth Date
            </Typography>
            <Stack direction={"row"} spacing={2}>
              <TextField
                // size="small"
                placeholder="DD"
                InputProps={{
                  style: {
                    borderRadius: ".75rem",
                    background: "white",
                  },
                }}
              />
              <TextField
                // size="small"
                placeholder="MM"
                InputProps={{
                  style: {
                    borderRadius: ".75rem",
                    background: "white",
                  },
                }}
              />

              <TextField
                // size="small"
                placeholder="YY"
                InputProps={{
                  style: {
                    borderRadius: ".75rem",
                    background: "white",
                  },
                }}
              />
            </Stack>
            <Button
              sx={{
                width: "100%",
                color: "white",
                background: "#007bff",
                borderRadius: "0.8rem",
                fontWeight: "bold",
              }}
            >
              Submit
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default CommunityCard;
