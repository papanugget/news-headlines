import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
    render() {
        return (
            <div>
                This is the App component
                <div>
                    <SearchBar/>
                </div>
            </div>
        )
    }
}

export default App;