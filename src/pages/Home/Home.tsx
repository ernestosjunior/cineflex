import { Suspense, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Title } from "../../globalStyles";
import { Movies } from "./styles";
import { CardMovie } from "../../components";
import { axiosInstance } from "../../service/api";

type Movie = {
  id: number;
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
  const path = window.location.pathname;
  const hasFooter = path.includes("/sessoes") || path.includes("/assentos");

  return (
    <>
      <Title>Selecione o filme</Title>
      <Suspense fallback={"Loading..."}>
        <Movies hasFooter={hasFooter}>
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
