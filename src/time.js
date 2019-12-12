import React, {Component} from 'react';


class InputTime extends Component{

    /*timeTable(){
        <table>
                <tr>
                    <th>UTC</th>
                </tr>
                <tr>
                    <td>11:30</td>
                    <td>12:30</td>
                </tr>
                
            </table>
    }*/

    render(){
        return(
            <div>
                {/*<div>{this.timeTable}</div>*/}
                <table>
                    <th>
                        <tr>
                            <td>UTC</td>
                        </tr>
                    </th>
                    <tr>
                        <td>11:30</td>
                    </tr>
                    <tr>
                        <td>12:00</td>
                    </tr>
                    <tr>
                        <td>12:30</td>
                    </tr>
                    <tr>
                        <td>13:00</td>
                    </tr>
                    <tr>
                        <td>13:30</td>
                    </tr>
                    
                </table>
            </div>
        )
    }

}

export default InputTime;