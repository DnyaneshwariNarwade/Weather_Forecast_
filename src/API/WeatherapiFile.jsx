const baseurl="https://api.weatherapi.com/v1/current.json?key=9a2219c6b4fc4479bf050003240902";

export const getapi= async(city)=>
{
    const response=await fetch(`${baseurl}+&q=${city}&aqi=no`);
    return await response.json();
};
export default getapi;

