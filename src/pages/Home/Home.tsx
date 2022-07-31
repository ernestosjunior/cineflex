import { Suspense, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Title } from "../../globalStyles";
import { Movies } from "./styles";
import { CardMovie } from "../../components";
import { axiosInstance } from "../../service/api";

type Movie = {
  id: string;
  posterURL: string;
}[];

const HomePage = () => {
  const [movies, setMovies] = useState<Movie>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await axiosInstance.get("/movies");
      setMovies(res.data);
    };
    fetchMovies();
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <Title>Selecione o filme</Title>
      <Suspense fallback={"Loading..."}>
        <Movies>
          {movies.map((moovie) => (
            <CardMovie
              srcImage={moovie.posterURL}
              onClick={() => navigate(`../sessoes/${moovie.id}}`)}
            />
          ))}
        </Movies>
      </Suspense>
    </>
  );
};

export default HomePage;
