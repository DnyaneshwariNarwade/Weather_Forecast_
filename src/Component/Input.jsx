import React from "react";
import '../App.css';
import '../Context/WeatherContext'
import { UseWeather } from "../Context/WeatherContext";

const Input =()=>
{
    const weather=UseWeather()
   
    return(
        <div className="inputs" >
            <input value={weather.city}
             onChange={(e)=>{weather.setcity(e.target.value)}}
             style={{height:40, fontWeight:'bold', fontSize:'25px', margin:'20px'}}></input>
        </div>
    );
}
export default Input;