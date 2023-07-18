import React, { useState } from 'react';
import { Card, Button, Text, Image } from '@nextui-org/react';

const Carousel = ({ cards }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const nextCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <Button onClick={previousCard}>Previous</Button>
      {cards[currentCardIndex]}
      <Button onClick={nextCard}>Next</Button>
    </div>
  );
};

export default Carousel;
