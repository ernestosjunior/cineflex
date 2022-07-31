import React from "react";
import { Card, Image } from "./styles";

interface CardMovieProps {
  srcImage: string;
  onClick: () => void;
}

const CardMovie: React.FC<CardMovieProps> = ({ srcImage, onClick }) => {
  return (
    <Card onClick={onClick}>
      <Image src={srcImage} alt="Movie image" />
    </Card>
  );
};

export default CardMovie;
