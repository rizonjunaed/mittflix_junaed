import React from 'react';

const SearchBar = (props) => {
    const [searchQuery, setSearchQuery] = React.useState('')
    const [numberOfResults, setNumberOfResults] = React.useState(0)
    
    function searchMovies (event){
        const searchText = event.target.value;
        setSearchQuery(searchText);        
        const searchResultMovies =  props.moviesArray.filter(function(movie){if(movie.title.toLowerCase().includes(searchText) || (movie.overview.toLowerCase().includes(searchText))){return true}})
        setNumberOfResults(searchResultMovies.length)
        
        props.updateMoviesToShowFunction(searchResultMovies);
    }

    return <div id="search" className="search">
     <input type="search" placeholder="Search for a title..." value={searchQuery} onChange={searchMovies} />
     <div className="searchResults">{searchQuery && `Showing ${numberOfResults} results for ${searchQuery}`}</div>
    </div>
}

export default SearchBar