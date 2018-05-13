import _ from 'lodash';
import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: 'Armenia 4K'
        };
    }
    render() {
        return (
            <div className="search-container col-md-8">
                <input 
                    className="form-control"
                    value={this.state.searchValue}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(searchValue){
        this.setState({searchValue});
        this.props.onSearchTermChange(searchValue);
    }
}

export default SearchBar;