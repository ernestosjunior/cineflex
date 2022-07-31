import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Title } from "../../globalStyles";
import { Movies } from "./styles";
import { CardMovie } from "../../components";
import { axiosInstance } from "../../service/api";
import { hasFooter } from "../../utils/hasFooter";

type Movie = {
  id: number;
  posterURL: string;
  title: string;
}[];

interface HomePageProps {
  setFooter: (state: boolean) => void;
  handleFields: (field: string, value: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setFooter, handleFields }) => {
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

  return (
    <>
      <Title>Selecione o filme</Title>
      <Movies hasFooter={hasFooter()}>
        {movies.map((movie) => (
          <CardMovie
            srcImage={movie.posterURL}
            onClick={() => {
              handleFields("movie", movie.title);
              navigate(`../sessoes/${movie.id}`);
            }}
          />
        ))}
      </Movies>
    </>
  );
};

export default HomePage;
