import React from 'react';
import './YearPage.css';

const YearPage = ({ movies }) => {
    //내림 차순으로 배열 정리
  const sortedMovies = [...movies].sort((a, b) => b.year - a.year);

  return (
    <div className='getYearPage'>
      <h2>Released Year({movies.length})</h2>
      <ul>
        {sortedMovies.map((movie) => (
          <li key={movie.id} className='getReleasedYear'>
            <span className='forBoldTxt'>"{movie.title}"</span> - Released Year: <span className='forBoldTxt'>{movie.year}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YearPage;
