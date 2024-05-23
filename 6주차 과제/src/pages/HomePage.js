import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useMovieStore from '../store';

function HomePage() {
  const {
    movies,
    sortOption,
    genre,
    year,
    setSortOption,
    setGenre,
    setYear,
    fetchMovies
  } = useMovieStore();

  useEffect(() => {
    fetchMovies();
  }, [sortOption, genre, year, fetchMovies]);

  return (
    <div>
      <h1>Movie List</h1>
      <div>
        <label htmlFor="sort">Sort by: </label>
        <select
          id="sort"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="date_added">Newest</option>
          <option value="title">Title</option>
          <option value="rating">Rating</option>
          <option value="download_count">Popularity</option>
        </select>
      </div>
      <div>
        <label htmlFor="genre">Genre: </label>
        <select
          id="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="">All</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="Horror">Horror</option>
          <option value="Sci-Fi">Sci-Fi</option>
          {/* Add more genres as needed */}
        </select>
      </div>
      <div>
        <label htmlFor="year">Year: </label>
        <input
          id="year"
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="e.g. 2020"
        />
      </div>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {movies.map((movie) => (
          <li key={movie.id} style={{ margin: '10px 0' }}>
            <Link to={`/movie/${movie.title}`}>
              <img src={movie.medium_cover_image} alt={movie.title} style={{ width: '150px', height: 'auto' }} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
