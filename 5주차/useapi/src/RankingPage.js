import React from 'react';
import './RankingPage.css';

const RankingPage = ({ movies }) => {
  //내림 차순으로 배열 정리
  const sortedMovies = [...movies].sort((a, b) => b.rating - a.rating);
  //중요한 점: [...movies]로 배열을 복사해야함!

  return (
    <div className='getRank'>
      <h2>Current Ranking({movies.length})</h2>
      <ul>
        {sortedMovies.map((movie) => (
          <li key={movie.id} className='sortedRankList'>
            <span id='getTitle'>"{movie.title}"</span> - Current Rating: <span id='getRate'>{movie.rating}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RankingPage;