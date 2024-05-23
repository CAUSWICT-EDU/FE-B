import React, { useEffect, useState } from 'react';
import { fetchMovieByTitle } from '../services/api';
import { useParams } from 'react-router-dom';

function MoviePage() {
  const { title } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const movieData = await fetchMovieByTitle(title);
        setMovie(movieData);
      } catch (error) {
        console.error('Error fetching movie by title:', error);
      }
    };
    getMovie();
  }, [title]);

  return (
    <div>
      {movie ? (
        <div>
          <h1>{movie.title}</h1>
          <p>{movie.description_full}</p>
          <p>Release Date: {movie.year}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default MoviePage;
