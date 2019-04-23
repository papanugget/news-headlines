import React from 'react';
import SourceSelect from './SourceSelect.js'
import news from '../api/news';

class App extends React.Component {
    // state to hold sources
    state = {
        sources: [],
        selectedSource: null,
        errors: null
    }
    // function to get news sources 
    getSources = async () => {
        // get res from news api
        const res = await news.get(`sources?${news.defaults.headers.Authorization}`);
        // console.log(res);
        // if response is ok
        if(res.status === 200) {
            // have the response data filtered out by english lang
            const englishSources = res.data.sources.filter( source => {
                if(source.language === 'en') {
                    return source;
                }
            })
            // set the state sources to contain all english sources
            this.setState({sources: englishSources});
        }
    }
    // run getSources func when component mounts
    componentDidMount() {
        this.getSources();
    }
    render() {
        return (
            <div className="ui grid container">
                <div className="row">
                    <div className="column">
                        <div className="ui message">
                            <h1 className="ui header"> Latest Headlines App</h1>
                        </div>
                    </div>                 
                </div>
                <div className="row">
                    <SourceSelect availableSources={this.state.sources}/> 
                </div>
            </div>
        )
    }
}

export default App;