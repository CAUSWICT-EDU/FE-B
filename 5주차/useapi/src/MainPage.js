import React from 'react';
import './MainPage.css';


const MainPage = ({movies}) => {
    return (
        <div className='GetMainPage'>
            <h1 id='MainPageTitle'>Current Movie List({movies.length})</h1>
            <ul>
              {movies.map((movie) => (
                <li key={movie.id} className='movieList'>
                  {movie.title}
                </li>
              ))}
            </ul>
        </div>
    )
}

export default MainPage;