//doesn't work 

/*
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const monthdates = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"]
const newDates = new Date();

function Date ({monthdates}) {
    if (!monthdate){
        return <div>no dates</div>
    }
    return <div>{message}</div>
}


        /*return(
            <div id="dates"> 
                {message ? React.createElement('div', null, message,) : React.createElement('div', null, 'no message',)}
            </div>
        );
ReactDOM.render(<Dates dates= {null} />, document.getElementById('root')); 