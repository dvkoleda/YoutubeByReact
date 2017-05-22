import React from 'react';
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';

const API_KEY = 'AIzaSyBO5dRwiycECCouxKG3YtwxlcIo3kIUxZA';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { videos: []};

        YTSearch({key: API_KEY,term: 'cats'}, (videos) => {
            this.setState({ videos }); //equals to {videos : videos}
        });
    }

    render() {
        return (
            <div>
                <SearchBar/>
                <VideoList videos={this.state.videos}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));