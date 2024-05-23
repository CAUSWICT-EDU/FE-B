import React from 'react';
import './GenrePage.css';

const GenrePage = ({ movies }) => {
  const genres = [...new Set(movies.flatMap(movie => movie.genres))];
  const moviesByGenre = genres.map(genre => ({
    genre,
    movies: movies.filter(movie => movie.genres.includes(genre)),
  }));

  return (
    <div className='getGenrePage'>
      <h2>Genre Category</h2>
      {moviesByGenre.map(({ genre, movies }) => (
        <div key={genre} className='certificateGenre'>
          <h3 id='GenreTitle'>[{genre}]</h3>
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default GenrePage;
