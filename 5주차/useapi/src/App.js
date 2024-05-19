import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RankingPage from "./RankingPage";
import YearPage from "./YearPage";
import GenrePage from "./GenrePage";
import MainPage from "./MainPage";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
      );
      console.log(res.data); //console을 통해서 가져온 영화들에 대한 정보 확인 가능
      setMovies(res.data.data.movies); //console을 열어보면 data 필드 안에 movies가 존재
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <Router>
      <div>
        <h1 id='GreetPageTitle'>Welcome To Moive Info!</h1>
        {loading ? <strong>Loading....</strong> : null}
        <nav>
          <ul className='movePage'>
            <li className='moveLink' id='GoToMain'>
              <Link to="/main">Main</Link>
            </li>
            <li className='moveLink' id='GoToRank'>
              <Link to="/ranking">Ranking</Link>
            </li>
            <li className='moveLink' id='GoToYear'>
              <Link to="/year">Year</Link>
            </li>
            <li className='moveLink' id='GoToGenre'>
              <Link to="/genre">Genre</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/ranking" element={<RankingPage movies={movies} />} />
          <Route path="/year" element={<YearPage movies={movies} />} />
          <Route path="/genre" element={<GenrePage movies={movies} />} />
          <Route path="/main" element={ <MainPage movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;