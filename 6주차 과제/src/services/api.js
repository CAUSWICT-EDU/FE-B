import axios from 'axios';

const BASE_URL = 'https://yts.mx/api/v2';

export const fetchMovies = async (sortBy = 'date_added', genre = '', year = '') => {
  try {
    const params = { sort_by: sortBy };
    if (genre) {
      params.genre = genre;
    }
    if (year) {
      params.year = year;
    }

    const response = await axios.get(`${BASE_URL}/list_movies.json`, { params });
    return response.data.data.movies;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export const fetchMovieByTitle = async (title) => {
  try {
    const response = await axios.get(`${BASE_URL}/list_movies.json`, {
      params: { query_term: title }
    });
    const movies = response.data.data.movies;
    return movies.find(movie => movie.title.toLowerCase() === title.toLowerCase());
  } catch (error) {
    console.error('Error fetching movie by title:', error);
    throw error;
  }
};

