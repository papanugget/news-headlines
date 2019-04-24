import React from 'react';

const HeadlineList = () => {
    return (
        <div className="row">
            <div className="ui two column stackable grid container">
                <div className="column">
                    <div className="ui top attached info message">Info</div>
                    <div className="ui bottom attached segment">Panel content</div>
                </div>

                <div className="column">
                    <div className="ui segment">Content</div>
                </div>

                <div className="column">
                    <div className="ui segment">Content</div>
                </div>

                <div className="column">
                    <div className="ui segment">Content</div>
                </div>
            </div>
        </div>
    )
}

export default HeadlineList;