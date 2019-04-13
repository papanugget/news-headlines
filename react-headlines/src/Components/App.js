import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import HeadlineList from './HeadlineList';
import NewsSources from './NewsSources';
import news from '../API/news';


class App extends React.Component {
    render() {
        return (
            <div className="ui container grid" style={{padding: '5em 0em' }}>
                <div className="row">
                    <div className="orange column">
                        <div className="ui orange message">
                            <h1 className="ui header">
                                NewsFeed
                            </h1>
                            <p>Get the latest headlines from your favorite news sources</p>
                        </div>
                    </div>
                </div>

                <NewsSources/>

                <div className="row">
                    <div className="column">
                        <h2 className="ui header">
                            Latest Headlines
                        </h2>
                        <div className="ui divider"></div>
                        <HeadlineList/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;