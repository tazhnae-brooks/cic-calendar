import React,{Component} from 'react';


class Dropdown extends Component{

render(){
    return( 
    <div className="names#2:text input">
    <form>
        <label>
            Name:
            <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
    </form>
    </div>
    )}

}

export default Dropdown;