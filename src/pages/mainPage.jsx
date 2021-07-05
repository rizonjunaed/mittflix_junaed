import React from 'react';
import {topbar as Topbar} from '../components/topbar.jsx';
import {movie as Movie} from '../components/movie';
import movieDb from '../cloneDb.json';
import SearchBar from '../components/searchBar';

const MainPage = () => {
  let sortedFunction = function(a, b){ if (a.name < b.name){ return -1; } if (a.name > b.name ){return 1; } return 0; };
  const sortedGenres = movieDb.genres.sort(sortedFunction);
  let filteredFunction = function(currentMovie, currentGenreId){return currentMovie.genre_ids.includes(currentGenreId)};

  const [moviesToShow, setMoviesToShow] = React.useState(movieDb.movies);
  let updateMoviesToShow = function (updatedMovies){setMoviesToShow(updatedMovies)};
  
  return (
      <div>
        <Topbar>
          <SearchBar moviesArray={movieDb.movies} updateMoviesToShowFunction={updateMoviesToShow} />
        </Topbar>
         {sortedGenres.map(function(currentGenre){
           let filterMoviesResult = moviesToShow.filter(function (movieData){return filteredFunction(movieData, currentGenre.id)});
           if(filterMoviesResult.length > 0){
             let mapFunction = (function(movieData){return   <Movie key={movieData.id} title={movieData.title} vote_average={movieData.vote_average} overview={movieData.overview} poster_path={movieData.poster_path}/>})
            return <div key={currentGenre.id} className="titleList">
            <div className="title">
              <h1>{currentGenre.name}</h1>
              <div className="titles-wrapper">
                {
                  filterMoviesResult.map(mapFunction)
                }            
                </div>
            </div>
          </div>
           }})}
  </div>
)};

export default MainPage;