import React from 'react';
import HeadlineList from './HeadlineList'

class NewsSources extends React.Component {
    state = {
        clicked: '',
        sourceName: ''
    };
    onSelect = (e) => {
        // console.log(e.target.value);
        // console.log(e.target.getAttribute('data-value'));
        this.setState({ 
            clicked: e.target.getAttribute('data-value'),  
            sourceName: e.target.value        
        });
        // console.log(this.state.clicked)
    }
    render() {   
        ( () =>  {
            const newsSource = document.querySelector('#news-sources');
            let output = '';
            this.props.sources.map( source => {
                if(source.language === 'en' && source.name !== 'Breitbart News') {
                    output += `<option key=${source.id} data-value=${source.id}>${source.name}</option>`;
                    newsSource.innerHTML = output;    
                }
            });
            let selectList = document.querySelectorAll('option');
            // console.log(selectList);
            // selectList.addEventListener('select', this.onSelect);
            selectList.forEach( element => element.addEventListener('click', this.onSelect)); 
        })();    
        return (
            <div>
                <form>
                    <fieldset>
                        <legend>News Headlines</legend>
                        <p>
                            <label>Select a news source</label>
                            <select id="news-sources">

                            </select>
                        </p>
                    </fieldset>
                </form>
                <HeadlineList clicked={this.state.clicked} sourceName={this.state.sourceName}/>
            </div>
        )
    }
}

export default NewsSources;