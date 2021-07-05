//component to show in '/' route.
//this shows all movies grouped into genres.
//the movies and the genres data come from API.
import React from 'react';
import TopBar from '../components/TopBar.jsx';
import Movie from '../components/Movie';
import SearchBar from '../components/SearchBar';
import { getAll, genres } from '../MovieAPI.js';

const MainPage = () => {
  let sortedFunction = function(a, b){ if (a.name < b.name){ return -1; } if (a.name > b.name ){return 1; } return 0; };
  let filteredFunction = function(currentMovie, currentGenreId){return currentMovie.genre_ids.includes(currentGenreId)};
  const [allMovies, setAllMovies] = React.useState([]);
  const [moviesToShow, setMoviesToShow] = React.useState(allMovies);
  const [allSortedGenres, setAllSortedGenres] = React.useState([]);

  let updateMoviesToShow = function (updatedMovies){setMoviesToShow(updatedMovies)};
  
  //gets all genre from API and sorts them alphabetically on component first render.
  React.useEffect(function(){
    const getAllGenres = async function(){
      const genresFromDb = await genres();
      const sortedGenres = genresFromDb.sort(sortedFunction);
      setAllSortedGenres(sortedGenres)
    }
    getAllGenres();
  },[])

  //gets all movies from API on component first render.
  React.useEffect(function(){
    const getAllMovies = async function(){
      const moviesFromDb = await getAll();
      setAllMovies(moviesFromDb)
      setMoviesToShow(moviesFromDb)
    }
    getAllMovies();
  },[])

  return (
      <div>
       {allSortedGenres.length > 0 && moviesToShow.length > 0 && (
         <>
          <TopBar>
            <SearchBar moviesArray={allMovies} updateMoviesToShowFunction={updateMoviesToShow} />
          </TopBar>
          {allSortedGenres.map(function(currentGenre){
           let filterMoviesResult = moviesToShow.filter(function (movieData){return filteredFunction(movieData, currentGenre.id)});
           if(filterMoviesResult.length > 0){
             let mapFunction = (function(movieData){return <Movie key={movieData.id} title={movieData.title} vote_average={movieData.vote_average} overview={movieData.overview} poster_path={movieData.poster_path} movie={movieData} />})
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
         </>)}
  </div>
)};

export default MainPage;