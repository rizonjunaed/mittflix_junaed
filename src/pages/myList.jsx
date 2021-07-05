import React from 'react';
import {topbar as Topbar} from '../components/topbar.jsx';
import Movie from '../components/movie';
import SearchBar from '../components/searchBar';
import { getAll } from '../MovieAPI.js';

const MyList = () => {
  const [allMovies, setAllMovies] = React.useState([]);
  const [moviesToShow, setMoviesToShow] = React.useState(allMovies);

  let updateAllMovies = function (movies){setAllMovies(movies)};
  let updateMoviesToShow = function (updatedMovies){setMoviesToShow(updatedMovies)};

  React.useEffect(function(){
    if (allMovies.length===0){
      const getMyListMovies = async function(){
        const moviesFromDb = await getAll();
        setAllMovies(moviesFromDb)
        let filteredFunction = function(currentMovie){return currentMovie.my_list};
        setMoviesToShow(moviesFromDb.filter(filteredFunction))
      }
      getMyListMovies();
    }
  },[allMovies])
  
  return (
      <div>
        <Topbar>
          <SearchBar  moviesArray={moviesToShow} updateMoviesToShowFunction={updateMoviesToShow} />
        </Topbar>
        <div className="titleList">
          <div className="title">
            <div className="titles-wrapper">
              {moviesToShow.length > 0 && moviesToShow.map(function (movieData){return <Movie key={movieData.id} title={movieData.title} vote_average={movieData.vote_average} overview={movieData.overview} poster_path={movieData.poster_path} movie={movieData} isInMyListPage={true} updateAllMoviesFunction={updateAllMovies} />
              })}
            </div>
          </div>
        </div>
  </div>
)};

export default MyList;