import React, {Component} from 'react';
import './index.css';
//import Message from './nullcalendartest'; 
import Moveon from './nextmonth'; 

class CalendarTwo extends Component{
    render(){
        return(
            <div id="calendar">
                    <table>
                    <tr>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                    </table>
                    <tr>
                        <th>< Moveon/></th>
                        <th>{null}</th>
                        <th>{null}</th>
                        <th>{null}</th>
                        <th>{null}</th>
                        <th>{null}</th>
                        <th>{null}</th>
                        <th>{null}</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>

                    </tr><tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>

                    </tr><tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>

                    </tr><tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>

                    </tr><tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>

                    </tr>
            </div>
        );
    }

}

export default CalendarTwo;