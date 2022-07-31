import React from "react";
import { Card, Image } from "./styles";

interface CardMovieProps {
  srcImage: string;
}

const CardMovie: React.FC<CardMovieProps> = ({ srcImage }) => {
  return (
    <Card>
      <Image src={srcImage} alt="Movie image" />
    </Card>
  );
};

export default CardMovie;
