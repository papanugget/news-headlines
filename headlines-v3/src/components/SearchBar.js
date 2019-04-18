import React from 'react';

const SearchBar = (props) => {
    console.log(props);
    // if props.item is language return a language selection option
    if(props.language) {
        const items = props.language.map( (language, idx) => {
            return (
                <div 
                    className="item" 
                    key={idx} 
                    data-value={language}
                >{language}
                </div>
            )
        });
        return <div className="menu">{items}</div>
    } else if(props.sources) {
        const items = props.sources.map( (source, idx) => {
            return (
                    <div 
                        className="item" 
                        key={idx} 
                        data-value={source.url}
                    >{source.name}
                    </div>
            )
        });
        return <div className="menu">{items}</div>
    }
}

export default SearchBar;