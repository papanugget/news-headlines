import React from 'react';
import SearchBar from './SearchBar';
import news from '../api/news';

class App extends React.Component {
    // state to contain news sources and selected source
    state = {
        language: [],
        sources: [],
        selectedLanguage: '',
        selectedSource: ''
    };
    // get sources list from axios / news api onload
    componentDidMount = async () =>  {
        const res = await news.get(`sources?${news.defaults.headers.Authorization}`);
        if(res.status === 200) {
            this.setState({sources: res.data.sources});
        }
        const languages = this.state.sources.map ( source => {
            // console.log(source.language)
            return source.language
        }).filter((lang, idx, arr) => {
            return idx === arr.indexOf(lang);
        })
        this.setState({language: languages});
    }
    
    render() {
        // console.log(this.state);
        return (
            <div className="ui container">
                This is the App component
                <div className="ui two column stackable grid">
                    <div className="column">
                        <div className="ui segment">
                            <div className="ui fluid search selection dropdown">
                            <i className="dropdown icon"></i>
                                <div className="default text">Select a language</div>
                                <SearchBar language={this.state.language}/>
                            </div>
                            
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui segment">
                            <div className="ui fluid search selection dropdown">
                            <i className="dropdown icon"></i>
                                <div className="default text">Select a news source</div>
                                <SearchBar sources={this.state.sources}/>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default App;