
import { useContext, useState } from "react"
import { createContext } from "react"
import { getapi } from "../API/WeatherapiFile"
const WeatherContext=createContext(null)
export const UseWeather=()=>
{
    return useContext(WeatherContext);
}
export const WeatherContextProvider=(props)=>
{
    const[data,setdata]=useState(null);
    const[city,setcity]=useState(null);
    const fetchdata=async()=> {
        const response = await getapi(city);
        setdata(response);
    }

    return <WeatherContext.Provider value={{city,data,setdata,setcity,fetchdata}}>
        {props.children}
    </WeatherContext.Provider>
}
