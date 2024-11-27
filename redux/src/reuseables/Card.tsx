import React from 'react'
import { MOVIEIMAGEURL } from '../service/movieApi';
import style from "../styles/card.module.css"

interface Movie {
  id: number;
  poster_path: string;
  title: string;
  overview: string;
}


interface Card { data: { results: Movie[];};
  isLoading: boolean;
  isError: boolean;
}

const Card: React.FC<Card> = ({ data, isLoading, isError }) => {
  return (
    <div className={style.image}>
      {/* Show loading message */}
      {/* {isLoading && <p>Loading...</p>} */}

      {/* Show error message */}
      {/* {isError && <p>Error occurred. Please try again later.</p>} */}

      {data?.results.map((movie) => (
        <div key={movie.id}>
          <img
            src={`${MOVIEIMAGEURL}${movie.poster_path}`} alt={movie.title}
          />
          <h2>{movie.title}</h2>
          <div className={style.overview}>{movie.overview}</div>
        </div>
      ))}
    </div>
  );
};

export default Card;

