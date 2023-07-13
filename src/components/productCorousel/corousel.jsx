import React, { useState } from 'react';
import { Card, Button } from '@nextui-org/react';
// import { ChevronLeftIcon, ChevronRightIcon } from '@mui/icons-material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Grid from "@mui/material/Grid"

const CarouselWithButton = ({ imageUrls }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleNextSlide = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const handlePrevSlide = () => {
    setSelectedIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const totalSlides = imageUrls.length; // Total number of slides in the carousel

  return (
<Grid>
      <Card css={{ w: '100%', h: '400px', boxShadow: 'none' }} variant="bordered">
        <Card.Body css={{ p: 0}}>
          <Card.Image
            src={imageUrls[selectedIndex]}
            objectFit="contain"
            width="100%"
            height="100%"
            alt="shoe"
            css={{}}
          />
          <Button
            auto
            shadow
            variant="text"
            size="small"
            icon={<ChevronLeftIcon />}
            disabled={selectedIndex === 0}
            onClick={handlePrevSlide}
            style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)' }}
          />
          <Button
            auto
            shadow
            variant="text"
            size="small"
            icon={<ChevronRightIcon />}
            disabled={selectedIndex === totalSlides - 1}
            onClick={handleNextSlide}
            style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)' }}
          />
        </Card.Body>
      </Card>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0.5rem' }}>
        {imageUrls.map((imageUrl, index) => (
          <div
            key={index}
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: index === selectedIndex ? 'blue' : 'gray',
              margin: '0 5px',
              cursor: 'pointer',
            }}
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>
      </Grid>
  );
};

export default CarouselWithButton;
