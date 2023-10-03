import { Container } from "@mui/material";
import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
// blog images
import blog1 from "../../assets/blog1.jpg";
import blog3 from "../../assets/blog3.jpeg";
import blog2 from "../../assets/blog2.jpeg";

function Blogs() {
  return (
    <Container maxWidth="lg" className="my-5 text-center">
      <h1 className="">UNICEF, for every child</h1>
      <Grid container spacing={2} justifyContent={"center"} sx={{padding:"4rem 0"}}>
        {blog_cards.map((blog_card, index) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ maxWidth: 345 }}>
              <Card sx={{ minHeight: "26rem" }}>
                <Stack
                  direction="column"
                  justifyContent={"space-between"}
                  alignItems={"space-between"}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      width="100%"
                      image={blog_card.img}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography
                        variant="subtitle1"
                        fontWeight={"bold"}
                        color="text.secondary"
                      >
                        {blog_card.title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Link to={blog_card.link}>
                      <Button size="small" color="primary">
                        Learn more ...
                      </Button>
                    </Link>
                  </CardActions>
                </Stack>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      <div className="d-flex justify-content-around my-3 flex-wrap p-2">
        {yoututbeVideos.map((video, index) => {
          return (
            <iframe
              style={{
                aspectRatio: "16/9",
                minWidth: "300px",
                width: "100%",
                maxWidth: "500px",
              }}
              key={index}
              src={video}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="m-2 rounded"
            ></iframe>
          );
        })}
      </div>
    </Container>
  );
}

export default Blogs;

const blog_cards = [
  {
    img: blog1,
    title: ` A systems approach to improving access to water, sanitation, and
    hygiene (WASH) in schools in Odisha, India`,
    link: "https://drive.google.com/file/d/1bU2Uo1ahSQvfLyrTK0G8KBe_7PBhTpPf/view?usp=drive_link",
  },
  {
    img: blog2,
    title: `Vision on Transformation of High Schools into Centre of Excellence
    (CoE), Government of Odisha initiative`,
    link: "https://drive.google.com/file/d/1adFrEMRynlDNSO2X5RZydDszUzSjiVSs/view?usp=sharing",
  },
  {
    img: blog3,
    title: `WASH & Climate resilient schools in Odisha`,
    link: "https://drive.google.com/file/d/1_WR3esqchXRT0uUEXox68rf17ChgExcS/view?usp=drive_link",
  },
];

const yoututbeVideos = [
  "https://www.youtube.com/embed/4c1NRIWEqXo?si=KQHqjMjuLobrtFwc",
  "https://www.youtube.com/embed/LKynsa1ZjsA?si=zf1c-0gJcFjXL88L",
  "https://www.youtube.com/embed/w19uuadnwBY?si=NmHsEq943wX5juKm",
  "https://www.youtube.com/embed/IqaEqRYSIx4?si=Pt6XmO7qIbqV18IQ",
  "https://www.youtube.com/embed/-Lcb4m0YtfU?si=A8hzJ--wHlGscp0p",
];
