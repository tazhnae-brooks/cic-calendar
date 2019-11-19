import React, { Component } from 'react';
import Moment from 'react-moment';
import './index.css';

class CalMonth extends Component {

    constructor(props) {
        super(props);
        this.date = <Moment>{new Date()}</Moment>
        this.state = {
            month: <Moment format="MMMM">{this.date}</Moment>
        };

        this.previousMonth = this.previousMonth.bind(this);
        this.nextMonth = this.nextMonth.bind(this);
    }

    // componentDidMount() {
    //     this.setState({ month: <Moment format="MMMM">{this.currentMonth}</Moment> })
    // }

    // componentWillUnmount() {
    // }


    previousMonth() {
        this.setState(state => ({
            month: <Moment subtract={{ months: 1 }} format="MMMM">{state.month}</Moment>
        }));
    }


    nextMonth() {
        this.setState(state => ({
            month: <Moment add={{ months: 1 }} format="MMMM">{this.currentMonth}</Moment>
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