/**
 * Created by dvkoleda on 20.05.17.
 */

import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.onInputChange = this.onInputChange.bind(this);

        this.state = {
            term: ''
        }
    }

    render() {
        return (
            <div>
                <input value={this.state.term} onChange={this.onInputChange}/>
            </div>
        )
    }

    onInputChange(event) {
        this.setState({
            term: event.target.value
        })
    }
}

export default SearchBar;