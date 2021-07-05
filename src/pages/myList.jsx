import React from 'react';
import {topbar as Topbar} from '../components/topbar.jsx';
import {movie as Movie} from '../components/movie';
import myListDb from '../myListDb.json';

const myList = () => {
  let sortedFunction = function(a, b){ if (a.name < b.name){ return -1; } if (a.name > b.name ){return 1; } return 0; };
  const sortedGenres = myListDb.genres.sort(sortedFunction);
  let filteredFunction = function(currentMovie, currentGenreId){return currentMovie.genre_ids.includes(currentGenreId)};
  
  return (
      <div>
        <Topbar />
         {sortedGenres.map(function(currentGenre){
           let filterMoviesResult = myListDb.movies.filter(function (movieData){return filteredFunction(movieData, currentGenre.id)});
           if(filterMoviesResult.length > 0){
             let mapFunction = (function(movieData){return   <Movie title={movieData.title} vote_average={movieData.vote_average} overview={movieData.overview} poster_path={movieData.poster_path}/>})
            return <div class="titleList">
            <div class="title">
              <h1>{currentGenre.name}</h1>
              <div class="titles-wrapper">
                {
                  filterMoviesResult.map(mapFunction)
                }            
                </div>
            </div>
          </div>
           }})}
  </div>
)};

export default myList;