import React from 'react';

class SourceSelect extends React.Component {
    // state to hold selected news sources
    state = {
        selectedSource: null
    }
    render() {
        return (
                <div className="column"> 
                    <div className="ui segment">
                        SourceSelect
                    </div>                    
                </div>          
        )
    }
}

export default SourceSelect;