import React from 'react';

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        // const { id, language, name} = this.props.source;
        return (
            <div className="item" role="option">
                <span className="text">{this.props}</span>
            </div>
        )
    }
}

export default Options;