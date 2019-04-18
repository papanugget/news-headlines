import React from 'react';
// import HeadlineList from './HeadlineList';
import NewsSources from './NewsSources';
import news from '../API/news';


class App extends React.Component {
    state = {
        sources: []
    };
    componentDidMount = async () => {
        const res = await news.get(`sources?${news.defaults.headers.Authorization}`);
        if(res.status === 200) {
            this.setState({sources: res.data.sources});
        }
    };

     render() {
        // const { id, language, name, url } = this.state.sources;
        return (
            <div className="ui container">
                <h1>Hello this is the app</h1>
                <NewsSources sources={this.state.sources} />
            </div>
        )
    }
}

export default App;