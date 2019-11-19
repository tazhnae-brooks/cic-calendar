import React, {Component} from 'react';
import './index.css';
//import CalMonth from './month.js';

const dates = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"]
const newDates = new Date();

//change to look like CalMonth, OR link to new nulltest idea 
class Moveon extends Component{
    nextMonth(){
        document.write("" + dates[newDates.getDate()])
    }

    render(){
        return(
            <div id="input">
    
                <p>{this.nextMonth}</p>

            </div>
            );
        }

}

export default Moveon; 