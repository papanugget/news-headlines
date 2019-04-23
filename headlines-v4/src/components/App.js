import React from 'react';
import SourceSelect from './SourceSelect.js'
import axios from 'axios';

class App extends React.Component {
    render() {
        return (
            <div className="ui container">
                <SourceSelect />
            </div>
        )
    }
}

export default App;