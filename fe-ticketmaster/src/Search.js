import React from 'react';
import * as api from "./api"

const Search = () => {
    
    return (
        <div>
        <form>
            <label>Search</label>
            <input type="text" placeholder="type in a Band, Genre or Location"></input>
            <button onClick={() => { api.fetchDetails()}}>Search!</button>
        </form>
        </div>
    );
};

export default Search;