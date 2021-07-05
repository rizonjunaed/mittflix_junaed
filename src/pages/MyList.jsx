//component to show in '/my-list' route.
//this shows all liked movies without grouping.
//the liked movies come from API.
import React from 'react';
import TopBar from '../components/TopBar.jsx';
import Movie from '../components/Movie';
import SearchBar from '../components/SearchBar';
import { getAll } from '../MovieAPI.js';

const MyList = () => {
  const [allMovies, setAllMovies] = React.useState([]);
  const [moviesToShow, setMoviesToShow] = React.useState(allMovies);

  let updateAllMovies = function (movies){setAllMovies(movies)};
  let updateMoviesToShow = function (updatedMovies){setMoviesToShow(updatedMovies)};

  //gets all movies from API and filters them by 'my_list' property of true.
  //this runs on change of allMovies state and also on component first render.
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
        <TopBar>
          <SearchBar  moviesArray={moviesToShow} updateMoviesToShowFunction={updateMoviesToShow} />
        </TopBar>
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