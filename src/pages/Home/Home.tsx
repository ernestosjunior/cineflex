import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Title } from "../../globalStyles";
import { Movies } from "./styles";
import { CardMovie } from "../../components";
import { axiosInstance } from "../../service/api";

type Movie = {
  id: number;
  posterURL: string;
}[];

interface HomePageProps {
  setFooter: (state: boolean) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setFooter }) => {
  const [movies, setMovies] = useState<Movie>([]);

  useEffect(() => {
    setFooter(false);
    const fetchMovies = async () => {
      const res = await axiosInstance.get("/movies");
      setMovies(res.data);
    };
    fetchMovies();
    // eslint-disable-next-line
  }, []);

  const navigate = useNavigate();
  const path = window.location.pathname;
  const hasFooter = path.includes("/sessoes") || path.includes("/assentos");

  return (
    <>
      <Title>Selecione o filme</Title>
      <Movies hasFooter={hasFooter}>
        {movies.map((moovie) => (
          <CardMovie
            srcImage={moovie.posterURL}
            onClick={() => navigate(`../sessoes/${moovie.id}`)}
          />
        ))}
      </Movies>
    </>
  );
};

export default HomePage;
