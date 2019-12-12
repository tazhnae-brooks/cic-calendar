import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//import CalMonth from './month.js';
import Navigation from './monthtest.js';
import TeamInputs from './namelist.js';
//import WeekNav from './weektest.js';

class CIC extends Component {
    render() {
        return (
            <div id="something fancy" >
                <Navigation />
                <TeamInputs />
            </div>
        );
    }

}


ReactDOM.render(< CIC />, document.getElementById('root'));