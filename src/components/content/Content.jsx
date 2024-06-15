import NavBar from "../navbar/NavBar";
import MovieCard from "./MovieCard";

import "./content.css";
import ImageSlider from "./ImageSlider";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Content = () => {
  const ApiUrl =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

  const tmdb = import.meta.env.VITE_Read_Access;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: tmdb,
    },
  };

  const { isLoading, data } = useQuery({
    queryKey: ["movieData", { cacheTime: 604800000, staleTime: 604800000 }],
    queryFn: () => axios.get(ApiUrl, options),
  });

  if (isLoading) {
    return (
      <>
        <h1>Loding</h1>
      </>
    );
  }

  const getSlides = (
    data?.data.results.map(
      (value, index) => "https://image.tmdb.org/t/p/h632" + value.backdrop_path
    ) || []
  ).slice(10, 13);

  const getTitles = (
    data?.data.results.map((value, index) => value.title) || []
  ).slice(10, 13);

  return (
    <>
      <div className="ContentContainer">
        <NavBar />
        {/* Mid banner */}
        <ImageSlider imageArray={getSlides} tittleArray={getTitles} />
        {/* Populars */}
        <div className="Content">
          <h2>Popular on Movies Gallery</h2>

          <div className="MoviesCarosel">
            {data?.data.results.map((Value, index) => (
              <MovieCard
                mTitle={Value.title}
                mDesc={Value.overview}
                mRating={Value.vote_average}
                mImage={Value.backdrop_path}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
