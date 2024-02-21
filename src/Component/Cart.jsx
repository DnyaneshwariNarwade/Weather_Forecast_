import React from "react";
import '../App.css'
import{UseWeather} from '../Context/WeatherContext';

const Cart=()=>
{
    const weather=UseWeather()
    console.log(weather.data)
    return(
        <div className="cart">
            <img src={weather.data?.current?.condition?.icon}></img>
            <h2>{weather.data?.current?.temp_c}.C</h2>
            <h3>{weather.data?.location?.name},{weather.data?.location?.country}</h3>
        </div>
    );
}
export default Cart