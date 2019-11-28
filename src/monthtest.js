import React, { Component } from 'react';
import Moment from 'react-moment';
import * as dateFns from 'date-fns';
import './index.css';
//import { DayPicker } from 'react-day-picker';
//import 'react-day-picker/lib/style.css';


// Set the format for all times 

class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //month: <Moment></Moment>,
            month: new Date(),
            selectedDate: new Date(),
        };
        //this.monthOffset = 0
        this.previousMonth = this.previousMonth.bind(this);
        this.nextMonth = this.nextMonth.bind(this);
    }

    /*componentDidMount() {
        this.setState(() => ({
            month: <Moment>{new Date()}</Moment>,
        }));
    }*/

    // componentWillUnmount() {
    // }


    previousMonth = () =>{
        //this.monthOffset--
        this.setState(state => ({
            month: dateFns.subMonths(this.state.month, 1)//<Moment add={{ months: this.monthOffset }}>{this.state.month}</Moment>
        }));
    }


    nextMonth = () => {
        //this.monthOffset++
        this.setState(state => ({
            month: dateFns.addMonths(this.state.month, 1)//<Moment add={{ months: this.monthOffset }}>{this.state.month}</Moment>
        }));
    }

    renderDays(){
        const dateFormat ="EEEE";
        const days = [];

        let startDate = dateFns.startOfWeek(this.state.month)
        for (let i = 0; i < 7; i++){
            days.push(
                <div className="col col-center" key = {i}> 
                {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
                </div>
            );
        }
        return <div className="days row">{days}</div>;
    }

    renderCells(){
        const {month, selectedDate} = this.state;
        const monthStart = dateFns.startOfMonth(month);
        const monthEnd = dateFns.endOfMonth(monthStart);
        const startDate = dateFns.startOfWeek(monthStart);
        const endDate = dateFns.endOfWeek(monthEnd);

        const dateFormat = "d";
        const rows = [];

        let days = [];
        let day = startDate;
        let formattedDate = "";

        while (day <= endDate){
            for(let i = 0; i < 7; i++){
                formattedDate = dateFns.format(day, dateFormat);
                const cloneDay = day;
                days.push(
                    <div className={`col cell ${
                        ! dateFns.isSameMonth(day, monthStart) 
                        ? "disabled": 
                        dateFns.isSameDay(day, selectedDate) ? "selected" : "" 
                    }`}
                    key={day}
                    onClick={() => this.onDateClick(dateFns.parse(cloneDay))} >
                        <span className="number">{formattedDate}</span>
                        <span className="bg">{formattedDate}</span>
                    </div>
                );
                day = dateFns.addDays(day, 1);
            }
            rows.push(
                <div className="row" key={day}>{days}</div>
            );
            days = [];
        }
        return <div className="body">{rows}</div>;
    }

    onDateClick = day => {
        this.setState({
            selectedDate: day
        });
    };

    renderNav(){
        //Moment.globalFormat = "MMMM YYYY" // November 2019
        const dateFormat ="MMMM yyyy";

        return(
            <div className="header row flex-middle">
                <div className="col col-start">
                    <div className="eye"> 
                    <button onClick={this.previousMonth}>Previous</button>
                    </div>
                </div>
            <div className="col col-center">
                <span>{dateFns.format(this.state.month, dateFormat)}</span>
            </div>
            <div className="col col-end"></div>
            <div className="ball"> 
            <button onClick={this.nextMonth}>Next</button>
            </div>
        </div>
        );

    }

    render() {
        return (
            <div className="calendar">
                {/*<h1>{this.state.month}</h1>
                <button onClick={this.previousMonth}>Previous</button>
        <button onClick={this.nextMonth}>Next</button>*/}
                <div>{this.renderNav()}</div>
                <div>{this.renderDays()}</div>
                <div>{this.renderCells()}</div>
            </div>

        );
    }

}

export default Navigation;