import React from 'react';

const HeadlineCard = (props) => {
    console.log(props);
    const stories = props.stories.map( (story, idx) => {
        const { author, publishedAt, title, description, url, urlToImage } = story;
        return (
                <div className="card" key={idx}>
                    <div className="image">
                        <img src={urlToImage} className="image fluid" alt={description}/>
                    </div>
                    <div className="content">
                        <div className="header">{title}</div>
                    <div className="meta">
                        <a>{author}</a>
                    </div>
                    <div className="description">
                        {description}
                    </div>
                    </div>
                    <div className="extra content">
                        {/* <span className="right floated"> */}
                            Published {publishedAt}
                        {/* </span> */}
                    <span>
                        <a className="ui primary button" href={url} target="_blank">
                            Read More
                        </a>                              
                    </span>
                    </div>
                </div>
                 
        )
    });
    return <div>
        {stories}
    </div>
}

export default HeadlineCard;