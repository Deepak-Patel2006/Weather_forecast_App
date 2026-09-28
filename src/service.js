export const call_info = async(city)=>{
    try {
    let url=` http://api.weatherapi.com/v1/current.json?key=${process.env.Api_weather}&q=${city}&aqi=no`;
    
    const search = await fetch(url);
    const response = await search.json();
    
    return response;
    
    } catch(error) {
        next(error);
    }
}