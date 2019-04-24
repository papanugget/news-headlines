import React from 'react';
import SourceSelect from './SourceSelect.js';
import HeadlineList from './HeadlineList';
import news from '../api/news';

class App extends React.Component {
    // state to hold sources
    state = {
        sources: [],
        selectedSource: null,
        isLoading: true,
        error: null
    };
    // function to get news sources 
    getSources = async () => {
        // get res from news api
        const res = await news.get(`sources?${news.defaults.headers.Authorization}`)
        // console.log(res);
        // if response is ok
        if(res.status === 200) {
            // have the response data filtered out by english lang
            const englishSources = res.data.sources.filter( source => {
                if(source.language === 'en' && source.name !== 'Breitbart News') {
                    return source;
                }
            })
            // set the state sources to contain all english sources
            this.setState({sources: englishSources, isLoading: false})
            // console.log(this.state.sources)
        }
        // console.log(this.state)
    };
    // run getSources func when component mounts
    componentDidMount() {
        this.getSources();
    };
    // callback function to return data from SourceSelect to App and retrrieve headlines
    onSourceSelect = async (source) => {
        this.setState({selectedSource: source});
        const res = await news.get(`top-headlines?sources=${source}&${news.defaults.headers.Authorization}`);
        console.log(res);
    };
    render() {
        return (
            <div className="ui grid container">
                <div className="row">
                    <div className="column">
                        <div className="ui message">
                            <h1 className="ui header"> Latest Headlines App</h1>
                            <p>Select a news source and get the 10 latest headlines</p>
                        </div>
                    </div>                 
                </div>
                {!this.state.isLoading ? (<div className="row">
                    <SourceSelect availableSources={this.state.sources} onSourceSelect={this.onSourceSelect} /> 
                </div>) : (<div className="row">News sources are loading please wait</div>)}
                <HeadlineList/>
            </div>
        )
    }
}

export default App;