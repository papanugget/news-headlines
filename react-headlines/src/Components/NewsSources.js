import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import news from '../API/news';

class NewsSources extends React.Component {
    state = {
        sources: [],
        language: '',
        source: ''
    }
    componentDidMount = async (sources) => {
        // console.log(news.get('https://newsapi.org/v1/sources?language=en'))
        // console.log(news.defaults);
        const res = await news.get(`sources?${news.defaults.headers.Authorization}`);
        const langSelect = document.querySelector('#language');
        const sourceSelect = document.querySelector('#news-source');
        // console.log(res);
        if(res.status === 200) {
            this.setState({sources: res.data.sources});
            console.log(this.state);
            sources.map(source => {
                return (
                    <div>

                    </div>
                )
            })
        }
    } 
    render() {
        return (
            <div className="row">
            <div className="ui stackable two column grid">
            <h2 className="ui header">Please select a language and then a news source</h2>
            <h4>Found a total of {this.state.sources.length} sources</h4>
                <div className="column">
                    <div className="ui selection dropdown" role="listbox" aria-expanded="false" tabIndex="0" id="language">
                    <i aria-hidden="true" className="dropdown icon"></i>
                    </div>
                </div>
                <div className="column">
                    <div className="ui selection dropdown" role="listbox" aria-expanded="false" tabIndex="1" id="news-source">
                    <i aria-hidden="true" className="dropdown icon"></i>
                    </div>
                </div>
            </div>  
            </div>  
        )
    }
}

export default NewsSources;