import React from 'react';
import {topbar as Topbar} from '../components/topbar.jsx';
import {movie as Movie} from '../components/movie';
import SearchBar from '../components/searchBar';
import { getAll } from '../MovieAPI.js';

const MyList = () => {
  const [allMovies, setAllMovies] = React.useState([]);
  const [moviesToShow, setMoviesToShow] = React.useState(allMovies);

  let updateMoviesToShow = function (updatedMovies){setMoviesToShow(updatedMovies)};

  React.useEffect(function(){
    const getMyListMovies = async function(){
      const moviesFromDb = await getAll();
      setAllMovies(moviesFromDb)
      let filteredFunction = function(currentMovie){return currentMovie.my_list};
      setMoviesToShow(moviesFromDb.filter(filteredFunction))
    }
    getMyListMovies();
  },[])
  
  return (
      <div>
        <Topbar>
          <SearchBar  moviesArray={allMovies} updateMoviesToShowFunction={updateMoviesToShow} />
        </Topbar>
        <div className="titleList">
          <div className="title">
            <div className="titles-wrapper">
              {moviesToShow.length > 0 && moviesToShow.map(function (movieData){return <Movie key={movieData.id} title={movieData.title} vote_average={movieData.vote_average} overview={movieData.overview} poster_path={movieData.poster_path}/>
              })}
            </div>
          </div>
        </div>
  </div>
)};

export default MyList;