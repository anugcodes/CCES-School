import { Container } from "@mui/material";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import blog1 from "../../assets/blog1.jpg";
import blog3 from "../../assets/blog3.jpeg";
import blog2 from "../../assets/blog2.jpeg";

function Blogs() {
  return (
    <Container maxWidth="lg" className="my-5 text-center">
      <h1 className="">UNICEF, for every child</h1>
      <div className="d-flex justify-content-around my-3 flex-wrap">
        <Card style={{ width: "18rem" }} className="my-2">
          <Card.Img variant="top" src={blog3} />
          <Card.Body>
            <Card.Title>
              A systems approach to improving access to water, sanitation, and
              hygiene (WASH) in schools in Odisha, India
            </Card.Title>
            {/* <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text> */}
            <Button
              variant="primary"
              href="https://drive.google.com/file/d/1bU2Uo1ahSQvfLyrTK0G8KBe_7PBhTpPf/view?usp=drive_link"
            >
              Read More {`>`}
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }} className="my-2">
          <Card.Img variant="top" src={blog1} />
          <Card.Body>
            <Card.Title>
              Vision on Transformation of High Schools into Centre of Excellence
              (CoE), Government of Odisha initiative
            </Card.Title>
            {/* <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text> */}
            <Button
              variant="primary"
              href="https://drive.google.com/file/d/1adFrEMRynlDNSO2X5RZydDszUzSjiVSs/view?usp=sharing"
            >
              Read More {`>`}
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }} className="my-2">
          <Card.Img variant="top" src={blog2} />
          <Card.Body>
            <Card.Title>WASH & Climate resilient schools in Odisha</Card.Title>
            <Button
              variant="primary"
              href="https://drive.google.com/file/d/1_WR3esqchXRT0uUEXox68rf17ChgExcS/view?usp=drive_link"
              style={{ marginTop: "4.4em" }}
            >
              Read More {`>`}
            </Button>
          </Card.Body>
        </Card>
      </div>

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

const yoututbeVideos = [
  "https://www.youtube.com/embed/4c1NRIWEqXo?si=KQHqjMjuLobrtFwc",
  "https://www.youtube.com/embed/LKynsa1ZjsA?si=zf1c-0gJcFjXL88L",
  "https://www.youtube.com/embed/w19uuadnwBY?si=NmHsEq943wX5juKm",
  "https://www.youtube.com/embed/IqaEqRYSIx4?si=Pt6XmO7qIbqV18IQ",
  "https://www.youtube.com/embed/-Lcb4m0YtfU?si=A8hzJ--wHlGscp0p",
];
