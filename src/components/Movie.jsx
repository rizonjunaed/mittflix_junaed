//movie component which shows the movie carts.

import React from 'react';
import { addToList, removeFromList } from '../MovieAPI';

const Movie = function (props){
  const [movieAddedToList, setMovieAddedToList] = React.useState(props.movie.my_list);
  //function for adding movie to my list in API.
  const addMovieToList = async function(){
    const updatedMovie = await addToList(props.movie);
    if (updatedMovie.my_list) {
    setMovieAddedToList(true)
    }
    //reload all movies if movie is added in my list page.
    if(props.isInMyListPage){props.updateAllMoviesFunction([])}
  }

  //function for removing movie to my list in API.
  const removeMovieFromList = async function(){
    const updatedMovie = await removeFromList(props.movie);
    if (!updatedMovie.my_list) {
    setMovieAddedToList(false)
    }
    if(props.isInMyListPage){props.updateAllMoviesFunction([])}
  }

  const likeMovie = function(){
    if(movieAddedToList){
    removeMovieFromList(props.movie)
  } else{
    addMovieToList(props.movie)
  }
}

  return <div className="movie">
    <img
      src={props.poster_path}
    />
    <div className="overlay">
      <div className="title">{props.title}</div>
      <div className="rating">{props.vote_average}/10</div>
      <div className="plot">
        {props.overview}
      </div>
      <div data-toggled={movieAddedToList} className="listToggle" onClick={likeMovie}>
        <div>
          <i className="fa fa-fw fa-plus"></i>
          <i className="fa fa-fw fa-check"></i>
        </div>
      </div>
    </div>
  </div>
}

export default Movie
