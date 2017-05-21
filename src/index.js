import React from 'react';
import ReactDOM from 'react-dom'

import SearchBar from './components/search-bar';

const API_KEY = 'AIzaSyBO5dRwiycECCouxKG3YtwxlcIo3kIUxZA';

const App = function() {
    return (
        <div>
            <SearchBar />
        </div>
    )
};

ReactDOM.render(<App/>, document.querySelector('.container'));