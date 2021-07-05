import React from 'react';

const SearchBar = (props) => {
    const [searchQuery, setSearchQuery] = React.useState('')
    
    function searchMovies (event){
        const searchText = event.target.value;
        setSearchQuery(searchText);        
        const searchResultMovies =  props.moviesArray.filter(function(movie){if(movie.title.toLowerCase().includes(searchText) || (movie.overview.toLowerCase().includes(searchText))){return true}})
        props.updateMoviesToShowFunction(searchResultMovies);
    }

    return <form id="search" className="search">
     <input type="search" placeholder="Search for a title..." value={searchQuery} onChange={searchMovies} />
     <div className="searchResults"></div>
    </form>
}

export default SearchBar