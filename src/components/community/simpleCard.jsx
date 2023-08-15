import {
  Box,
  Grid,
  Stack,
  Typography,
  Card,
  CardContent,
  Button,
  TextField,
  MenuItem,
} from "@mui/material";
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

  const [selectedPlace, setPlace] = useState("select");

  const styles = {
    cards: css`
      height: 40vh;
      background: #ff6670c5;
      padding: 1vh 1vw;
      border-radius: 1.5rem;
    `,

    number: css`
      font-size: 3rem;
      font-weight: bold;
      padding-top: 2vh;
      color: white;
      font-family: Monomaniac One;
    `,

    text: css`
      //   font-size: 1.2rem;
      text-transform: uppercase;
      color: white;
      font-weight: 600;
    `,

    button: css`
      background: #007bff;
      width: 60%;
      font-size: 0.8rem;
      color: white;
      border-radius: 0.8rem;
      font-weight: bold;

      &:hover {
        background: red;
      }
    `,
    form: css`
      background-color: #ff6670c5;
      padding: 1vh 1.5vw;
      border-radius: 1.5rem;
    `,
  };

  return (
    <Box>
      <Grid container maxWidth={"xl"}>
        <Stack direction={"row"} spacing={1}>
          <Grid item md={3}>
            <Card sx={styles.cards}>
              <CardContent sx={{ height: "100%" }}>
                <Stack justifyContent={"space-between"} height={"100%"}>
                  <img
                    src={sun}
                    alt=""
                    style={{
                      width: "3vw",
                    }}
                  />
                  <Box>
                    <Typography sx={styles.number}>30</Typography>
                    <Typography sx={styles.text}>Communities Built</Typography>
                  </Box>
                  <Button sx={styles.button}>See Details</Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card sx={styles.cards}>
              <CardContent sx={{ height: "100%" }}>
                <Stack justifyContent={"space-between"} height={"100%"}>
                  <img
                    src={recycle}
                    alt=""
                    style={{
                      width: "3vw",
                    }}
                  />
                  <Box>
                    <Typography sx={styles.number}>40</Typography>
                    <Typography sx={styles.text}>
                      ENVIRONMENTAL PROJECTS
                    </Typography>
                  </Box>
                  <Button sx={styles.button}>See Details</Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card sx={styles.cards}>
              <CardContent sx={{ height: "100%" }}>
                <Stack justifyContent={"space-between"} height={"100%"}>
                  <img
                    src={community}
                    alt=""
                    style={{
                      width: "3vw",
                    }}
                  />
                  <Box>
                    <Typography sx={styles.number}>550</Typography>
                    <Typography sx={styles.text}>
                      Members from all around the world
                    </Typography>
                  </Box>
                  <Button sx={styles.button}>See Details</Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={4} sx={styles.form}>
            <Stack justifyContent={"space-evenly"} height={"100%"}>
              <Typography
                sx={css`
                  text-transform: uppercase;
                  font-weight: bold;
                  color: #007bff;
                `}
              >
                Create your own community
              </Typography>
              <TextField
                size="small"
                placeholder="Full Name"
                sx={css`
                  background-color: white;
                  border-radius: 0.3rem;
                `}
              />
              <TextField
                size="small"
                placeholder="Choose Your City"
                select
                value={selectedPlace}
                sx={css`
                  background-color: white;
                  border-radius: 0.3rem;
                `}
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
                sx={css`
                  text-transform: uppercase;
                  font-weight: bold;
                  color: #007bff;
                `}
              >
                Birth Date
              </Typography>
              <Stack direction={"row"} spacing={1}>
                <TextField
                  size="small"
                  placeholder="DD"
                  sx={css`
                    background-color: white;
                    border-radius: 0.3rem;
                  `}
                />
                <TextField
                  size="small"
                  placeholder="MM"
                  sx={css`
                    background-color: white;
                    border-radius: 0.3rem;
                  `}
                />
                <TextField
                  size="small"
                  placeholder="YY"
                  sx={css`
                    background-color: white;
                    border-radius: 0.3rem;
                  `}
                />
              </Stack>
              <Button
                sx={css`
                  background: #007bff;
                  font-size: 0.8rem;
                  color: white;
                  border-radius: 0.8rem;
                  font-weight: bold;

                  &:hover {
                    background: red;
                  }
                `}
              >
                Submit
              </Button>
            </Stack>
          </Grid>
        </Stack>
      </Grid>
    </Box>
  );
};

export default CommunityCard;
