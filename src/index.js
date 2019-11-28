import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//import CalMonth from './month.js';
import Navigation from './monthtest.js';

class CIC extends Component {
    render() {
        return (
            <div id="something fancy" >
                <Navigation />
            </div>
        );
    }

}


ReactDOM.render(< CIC />, document.getElementById('root'));