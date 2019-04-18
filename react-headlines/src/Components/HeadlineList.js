import React from 'react';
import news from '../API/news';
import HeadlineCard from './HeadlineCard';

class HeadlineList extends React.Component {
    state = {
        stories: []
    };
    
    componentWillReceiveProps= async (props) => {
        const source = this.props.clicked;
        // console.log(source);
        const res = await news.get(`top-headlines?sources=${source}&${news.defaults.headers.Authorization}`);
        if(res.status === 200) {
            // console.log(res);
            this.setState({stories: res.data.articles});
            // console.log(this.state);
        }
    }
    render() {
        const source = this.props.sourceName;
        // console.log(this.props)
        return (
            <div>
                <h1>These are the {this.state.stories.length} latest headlines from {source} </h1>
                    <div className="ui three cards">
                    <HeadlineCard stories={this.state.stories}/>       
                    </div>
            </div>
        )
    }
}

export default HeadlineList;