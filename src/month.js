import React, { Component } from 'react';
import Moment from 'react-moment';
import './index.css';

// Set the format for all times 
Moment.globalFormat = "MMMM YYYY" // November 2019
class CalMonth extends Component {

    constructor(props) {
        super(props);
        this.state = {
            month: <Moment></Moment>
        };
        this.monthOffset = 0
        this.previousMonth = this.previousMonth.bind(this);
        this.nextMonth = this.nextMonth.bind(this);
    }

    componentDidMount() {
        this.setState(() => ({
            month: <Moment>{new Date()}</Moment>
        }));
    }

    // componentWillUnmount() {
    // }


    previousMonth() {
        this.monthOffset--
        this.setState(state => ({
            month: <Moment add={{ months: this.monthOffset }}>{this.state.month}</Moment>
        }));
    }


    nextMonth() {
        this.monthOffset++
        this.setState(state => ({
            month: <Moment add={{ months: this.monthOffset }}>{this.state.month}</Moment>
        }));
    }

    render() {
        return (
            <div>
                <h1>{this.state.month}</h1>
                <button onClick={this.previousMonth}>Previous</button>
                <button onClick={this.nextMonth}>Next</button>
            </div>

        );
    }

}

export default CalMonth;