import create from 'zustand';
import axios from 'axios';

const useMovieStore = create((set) => ({
  movies: [],
  sortOption: 'date_added',
  genre: '',
  year: '',
  setMovies: (movies) => set({ movies }),
  setSortOption: (sortOption) => set({ sortOption }),
  setGenre: (genre) => set({ genre }),
  setYear: (year) => set({ year }),
  fetchMovies: async () => {
    const { sortOption, genre, year } = useMovieStore.getState();
    try {
      const params = { sort_by: sortOption };
      if (genre) params.genre = genre;
      if (year) params.year = year;

      const response = await axios.get('https://yts.mx/api/v2/list_movies.json', { params });
      set({ movies: response.data.data.movies });
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }
}));

export default useMovieStore;
