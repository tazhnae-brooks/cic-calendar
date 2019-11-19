import React from 'react';
import ReactDOM from 'react-dom';
import CalMonth from './month.js';
import CalendarTwo from './calendartest.js';
//import Calendar from './calendar.js';
import './index.css';


class CIC extends React.Component {
    render() {
        return (
            <div id="something fancy" >

                <CalMonth />

                {/* <CalendarTwo /> */}
            </div>
        );
    }

}


ReactDOM.render(< CIC />, document.getElementById('root'));