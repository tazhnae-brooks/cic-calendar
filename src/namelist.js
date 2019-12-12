import React,{Component} from 'react';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import InputTime from './time.js';
import Popup from './popuptest.js';


class Names extends Component {

    //list <]:)
    onChange = page => {
        this.props.history.push(`/${page.target.value}`);
    };
    render(){
        return (
        <div className="names#1:list">
            <select onChange={this.onChange}>
                <option value="member1">tazhnae</option>
                <option value="member2">gene</option>
            </select>
        </div>
        ) 
}

}


const Menu = withRouter(Names);

function TeamInputs(){

        return(
            <div className="nameslist">
                <BrowserRouter> 
                    <div id="fourfofour"> 
                        <Route path="/member1" render={() => 
                          < Popup/>
                        }/> 
                    </div>
                    <div id="idk"> 
                        <Route path="/member2" render={() => 
                            alert("take a L ( its free :) )")
                        }/> 
                    </div>
            <Menu />
            </BrowserRouter>

        <div className="amer-UTC-time"> <InputTime/> </div>
        </div>
        )
    }

export default TeamInputs;