import React from "react";
import '../App.css';
const Button=(props)=>
{
    return(
       
        <div >
            <button onClick={props.onClick} className="btn">{props.value}</button>
        </div>
    );
}
export default Button;