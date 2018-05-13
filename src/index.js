import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
import ThemeSwitch from './components/theme_switch'

const API_KEY = 'AIzaSyCqgmJ_iw6BTAloxGi6Vsg-qv20nizgxFY';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null,
            theme: 'light'
        };

        this.videoSearch('Armenia 4K');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos : videos,
                selectedVideo : videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)},300);

        return (
            <div className={this.state.theme}>
                <div className="container">
                    <SearchBar onSearchTermChange={videoSearch}/>
                    <ThemeSwitch onThemeSwitch={theme => this.setState({theme})}/>
                    <VideoList 
                        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                        videos={this.state.videos} />
                    <VideoDetail video={this.state.selectedVideo} />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('section'));