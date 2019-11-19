import React, {Component} from 'react';
import './index.css';

const months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
const currentMonth = new Date();

class CalMonth extends Component{
    month(){
        document.write("" + months[currentMonth.getMonth()])
    }

    render(){
        return(
            <button onClick = {this.month} >click me</button>
        );
    }

}


export default CalMonth;

/*    constructor(props){
        super(props);                  //date string also available
        //this.state = {date: new Date().toLocaleString};
        this.state = {
            month: 0
        }
    }

    componentDidMount(){
        this.getDate();
    }

    componentWillUnmount(){

    }

    
    render(){
        return(
            <p>{this.state.date}</p>
        );
    }
}
*/

